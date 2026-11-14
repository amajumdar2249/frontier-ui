import React, { useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Terminal,
  Activity,
  Layers,
  Wand2,
  RotateCcw,
  Sparkles,
  Sliders,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { GenieSimulationAsset } from '@frontier-ui/shared-tokens';
import { GamepadController } from './GamepadController';

interface SimulatorStageProps {
  simulation: GenieSimulationAsset;
  isPlaying: boolean;
  playbackSpeed: number;
  activeKeys: Record<string, boolean>;
  actionLog: string[];
  worldPrompt: string;
  hudVisible: boolean;
  aspectRatio: '16:9' | '21:9';
  isGenerating: boolean;
  liveLatency: number;
  liveFps: number;
  onTogglePlay: () => void;
  onSetSpeed: (speed: number) => void;
  onSetPrompt: (prompt: string) => void;
  onSetHudVisible: (visible: boolean) => void;
  onSetAspectRatio: (ratio: '16:9' | '21:9') => void;
  onTriggerKey: (code: string) => void;
  onGenerateNewWorld: (prompt: string) => void;
}

export const SimulatorStage: React.FC<SimulatorStageProps> = ({
  simulation,
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
  onTogglePlay,
  onSetSpeed,
  onSetPrompt,
  onSetHudVisible,
  onSetAspectRatio,
  onTriggerKey,
  onGenerateNewWorld,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync play/pause and playback speed with video tag
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, simulation.videoUrl]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section id="simulator" className="px-4 md:px-8 max-w-7xl mx-auto space-y-6">
      {/* Top Bar / Current World Model Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0e0e10] border border-[#1f1f23] p-4 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#a855f7]/20 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
            <Activity size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                {simulation.title}
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#141418] border border-[#1f1f23] text-[#00e5ff]">
                {simulation.category}
              </span>
            </div>
            <p className="text-xs text-[#9ca3af] line-clamp-1 max-w-xl">
              {simulation.prompt}
            </p>
          </div>
        </div>

        {/* Telemetry Pills */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <div className="px-2.5 py-1 rounded-xl bg-[#141418] border border-[#1f1f23] flex items-center gap-1.5 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>{liveFps} FPS</span>
          </div>
          <div className="px-2.5 py-1 rounded-xl bg-[#141418] border border-[#1f1f23] text-[#00e5ff]">
            {liveLatency} ms
          </div>
          <div className="px-2.5 py-1 rounded-xl bg-[#141418] border border-[#1f1f23] text-[#a855f7] hidden sm:block">
            {simulation.telemetry.latentDimensions}
          </div>
        </div>
      </div>

      {/* Primary Simulator Viewport */}
      <div
        ref={containerRef}
        className={`relative w-full rounded-3xl overflow-hidden bg-[#000000] border border-[#1f1f23] shadow-2xl transition-all ${
          aspectRatio === '21:9' ? 'aspect-[21/9]' : 'aspect-video'
        }`}
      >
        {/* Real GCS Simulation Video */}
        <video
          ref={videoRef}
          src={simulation.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Subtle Cybernetic Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none scanline opacity-40" />

        {/* Interactive HUD Overlay */}
        {hudVisible && (
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between pointer-events-none select-none">
            {/* Top HUD Line */}
            <div className="flex items-start justify-between">
              {/* Latent State Coordinates */}
              <div className="p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] space-y-1 shadow-lg pointer-events-auto">
                <div className="text-[10px] text-[#00e5ff] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                  <span>LATENT DYNAMICS ENGINE</span>
                </div>
                <div className="text-[#9ca3af]">
                  HORIZON: <span className="text-white">{simulation.telemetry.actionHorizonSec}s</span> • RESOLUTION: <span className="text-white">{simulation.resolution}</span>
                </div>
                <div className="text-[#9ca3af]">
                  UNSUPERVISED LAM: <span className="text-[#22c55e]">CONVERGED</span>
                </div>
              </div>

              {/* Action Token Terminal Stream */}
              <div className="w-64 sm:w-80 max-h-36 overflow-hidden rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 p-2.5 font-mono text-[10px] pointer-events-auto shadow-lg hidden md:block">
                <div className="flex items-center justify-between text-[#6b7280] pb-1 border-b border-white/10 mb-1">
                  <span className="flex items-center gap-1">
                    <Terminal size={11} className="text-[#00e5ff]" /> ACTION_STREAM_60HZ
                  </span>
                  <span className="text-[9px] text-[#00e5ff]">LIVE</span>
                </div>
                <div className="space-y-0.5 text-gray-300">
                  {actionLog.slice(0, 4).map((log, idx) => (
                    <div
                      key={idx}
                      className={`truncate ${
                        idx === 0 ? 'text-[#00e5ff] font-semibold' : 'text-[#9ca3af]'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom HUD: Control Dock */}
            <div className="flex items-center justify-between pointer-events-auto bg-black/75 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-2xl">
              {/* Play / Pause / Speed */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onTogglePlay}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} className="fill-white" />}
                </button>

                {/* Speed buttons */}
                <div className="flex items-center bg-[#141418] rounded-xl p-0.5 border border-white/10 text-xs font-mono">
                  {[0.5, 1.0, 2.0].map((s) => (
                    <button
                      key={s}
                      onClick={() => onSetSpeed(s)}
                      className={`px-2 py-1 rounded-lg transition-colors ${
                        playbackSpeed === s
                          ? 'bg-[#00e5ff] text-black font-bold'
                          : 'text-[#9ca3af] hover:text-white'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Center status */}
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#9ca3af]">
                <span>WASD: Control World</span>
                <span>•</span>
                <span>Space: Jump</span>
              </div>

              {/* Viewport Toggles */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onSetAspectRatio(aspectRatio === '16:9' ? '21:9' : '16:9')}
                  className="px-2 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white transition-colors"
                  title="Toggle Aspect Ratio"
                >
                  {aspectRatio}
                </button>

                <button
                  onClick={() => onSetHudVisible(!hudVisible)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Toggle HUD Visibility"
                >
                  <Layers size={14} />
                </button>

                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Prompt-to-World Synthesis Input Bar + Gamepad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Prompt Generator */}
        <div className="lg:col-span-2 bg-[#0e0e10] border border-[#1f1f23] rounded-3xl p-5 shadow-hud space-y-4">
          <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#a855f7]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Prompt-to-World Synthesis
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded-full border border-[#a855f7]/20">
              Cross-Attention Latent Guidance
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={worldPrompt}
              onChange={(e) => onSetPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onGenerateNewWorld(worldPrompt);
              }}
              placeholder="Describe a physical world (e.g. Skiing down icy couloir, Watermelon slice, Axolotl cave)..."
              className="flex-1 px-4 py-2.5 rounded-2xl bg-[#141418] border border-[#1f1f23] focus:border-[#00e5ff] text-white text-xs outline-none placeholder:text-gray-500 font-sans"
            />
            <button
              onClick={() => onGenerateNewWorld(worldPrompt)}
              disabled={isGenerating}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-semibold text-black transition-all ${
                isGenerating
                  ? 'bg-[#00e5ff]/60 cursor-not-allowed'
                  : 'bg-[#00e5ff] hover:bg-[#00c4dc] shadow-glowCyan'
              }`}
            >
              {isGenerating ? (
                <>
                  <Wand2 size={14} className="animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Wand2 size={14} />
                  <span>Synthesize World</span>
                </>
              )}
            </button>
          </div>

          {/* Quick World Suggestion Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-1">
            <span className="text-[11px] font-mono text-[#6b7280]">PRESETS:</span>
            {[
              'First-person alpine powder skiing',
              'Submerged neon cathedral caustics',
              'Biomechanical crowned crane snow walk',
              'Hydrodynamic boat ripples on lily pond',
            ].map((preset, i) => (
              <button
                key={i}
                onClick={() => {
                  onSetPrompt(preset);
                  onGenerateNewWorld(preset);
                }}
                className="text-[11px] font-sans px-2.5 py-1 rounded-full bg-[#141418] hover:bg-[#1c1c22] border border-[#1f1f23] hover:border-[#33333d] text-[#9ca3af] hover:text-white transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Right Col: Virtual Gamepad */}
        <div className="lg:col-span-1">
          <GamepadController activeKeys={activeKeys} onTriggerKey={onTriggerKey} />
        </div>
      </div>
    </section>
  );
};
