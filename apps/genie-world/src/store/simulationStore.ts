import { useState, useEffect, useCallback, useRef } from 'react';
import { GENIE_SIMULATIONS } from '../data/simulations';
import { GenieSimulationAsset } from '@frontier-ui/shared-tokens';

export function useSimulationStore() {
  const [currentId, setCurrentId] = useState<string>('crowned-crane');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [activeKeys, setActiveKeys] = useState<Record<string, boolean>>({});
  const [actionLog, setActionLog] = useState<string[]>([
    '[INIT] Latent Space Initialized • VQ-VAE Token Stream Ready',
    '[ACTION_ZERO] Steady-State Rollout @ 60 FPS',
  ]);
  const [worldPrompt, setWorldPrompt] = useState<string>('');
  const [hudVisible, setHudVisible] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '21:9'>('16:9');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [liveLatency, setLiveLatency] = useState<number>(16.2);
  const [liveFps, setLiveFps] = useState<number>(60);

  const currentSimulation: GenieSimulationAsset =
    GENIE_SIMULATIONS.find((s) => s.id === currentId) || GENIE_SIMULATIONS[0];

  // Jitter telemetry slightly to reflect real-time inference loop
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveLatency(+(15.4 + Math.random() * 1.8).toFixed(1));
      setLiveFps(Math.random() > 0.05 ? 60 : 59);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  // Keyboard action event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling on space / arrows when simulator is focused
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
        // e.preventDefault();
      }

      setActiveKeys((prev) => {
        if (prev[e.code]) return prev;
        const updated = { ...prev, [e.code]: true };
        return updated;
      });

      // Append action token
      const keyName = e.code.replace('Key', '').replace('Arrow', '');
      const actionName =
        keyName === 'W' || keyName === 'Up' ? 'ACTION_FORWARD_MOVE' :
        keyName === 'S' || keyName === 'Down' ? 'ACTION_REVERSE_PULL' :
        keyName === 'A' || keyName === 'Left' ? 'ACTION_YAW_STEER_LEFT' :
        keyName === 'D' || keyName === 'Right' ? 'ACTION_YAW_STEER_RIGHT' :
        keyName === 'Space' ? 'ACTION_DISCRETE_IMPULSE' : `ACTION_${keyName.toUpperCase()}`;

      const token = `[${actionName}] Δv: +${(0.5 + Math.random() * 0.8).toFixed(2)} | latent_shift: ${(Math.random() * 0.04).toFixed(4)}`;
      setActionLog((prev) => [token, ...prev.slice(0, 14)]);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setActiveKeys((prev) => {
        const updated = { ...prev };
        delete updated[e.code];
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const selectSimulation = useCallback((id: string) => {
    setCurrentId(id);
    const sim = GENIE_SIMULATIONS.find((s) => s.id === id);
    if (sim) {
      setActionLog((prev) => [
        `[SWITCH_WORLD] Loaded Latent Checkpoint: "${sim.title}"`,
        `[LATENT_DIMS] ${sim.telemetry.latentDimensions} • Horizon: ${sim.telemetry.actionHorizonSec}s`,
        ...prev.slice(0, 12),
      ]);
    }
  }, []);

  const triggerKeyAction = useCallback((code: string) => {
    setActiveKeys((prev) => ({ ...prev, [code]: true }));
    const keyName = code.replace('Key', '').replace('Arrow', '');
    const token = `[MANUAL_PAD_${keyName}] Injected latent vector: +${(0.8 + Math.random() * 0.4).toFixed(2)}`;
    setActionLog((prev) => [token, ...prev.slice(0, 14)]);

    setTimeout(() => {
      setActiveKeys((prev) => {
        const c = { ...prev };
        delete c[code];
        return c;
      });
    }, 250);
  }, []);

  const generateNewWorld = useCallback(async (promptText: string) => {
    if (!promptText.trim()) return;
    setIsGenerating(true);
    setActionLog((prev) => [
      `[PROMPT_ENCODER] Tokenizing: "${promptText}"`,
      `[SAMPLING] Cross-Attention Guidance Scale: 7.5`,
      ...prev.slice(0, 12),
    ]);

    await new Promise((r) => setTimeout(r, 1400));

    // Pick closest or rotate simulation
    const match = GENIE_SIMULATIONS.find((s) =>
      s.prompt.toLowerCase().includes(promptText.toLowerCase()) ||
      s.title.toLowerCase().includes(promptText.toLowerCase())
    ) || GENIE_SIMULATIONS[(Math.floor(Math.random() * (GENIE_SIMULATIONS.length - 1)) + 1)];

    setCurrentId(match.id);
    setIsGenerating(false);
    setActionLog((prev) => [
      `[WORLD_SYNTHESIS_COMPLETE] Latent manifold stabilized @ 60 FPS`,
      ...prev.slice(0, 12),
    ]);
  }, []);

  return {
    simulations: GENIE_SIMULATIONS,
    currentSimulation,
    currentId,
    isPlaying,
    playbackSpeed,
    activeKeys,
    actionLog,
    worldPrompt,
    hudVisible,
    aspectRatio,
    isGenerating,
    liveLatency,
    liveFps,
    selectSimulation,
    togglePlay: () => setIsPlaying((p) => !p),
    setPlaybackSpeed,
    setWorldPrompt,
    setHudVisible,
    setAspectRatio,
    triggerKeyAction,
    generateNewWorld,
  };
}
