import React from 'react';
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Gamepad2,
  MousePointer2,
  Sliders,
} from 'lucide-react';

interface GamepadControllerProps {
  activeKeys: Record<string, boolean>;
  onTriggerKey: (code: string) => void;
}

export const GamepadController: React.FC<GamepadControllerProps> = ({
  activeKeys,
  onTriggerKey,
}) => {
  const isKeyActive = (code: string) => !!activeKeys[code];

  return (
    <div className="bg-[#0e0e10] border border-[#1f1f23] rounded-3xl p-5 shadow-hud space-y-4">
      <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3">
        <div className="flex items-center gap-2">
          <Gamepad2 size={16} className="text-[#00e5ff]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Latent Action Controller
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00e5ff] bg-[#00e5ff]/10 px-2 py-0.5 rounded-full border border-[#00e5ff]/20">
          60Hz Action Polling
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* WASD Navigation Pad */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono text-[#6b7280] text-center">
            PHYSICAL KEYBOARD WASD / ARROWS
          </div>
          <div className="flex flex-col items-center gap-1.5">
            {/* W / Up */}
            <button
              onMouseDown={() => onTriggerKey('KeyW')}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                isKeyActive('KeyW') || isKeyActive('ArrowUp')
                  ? 'bg-[#00e5ff] text-black border-[#00e5ff] scale-95 shadow-glowCyan'
                  : 'bg-[#141418] text-[#9ca3af] border-[#1f1f23] hover:border-[#33333d] hover:text-white'
              }`}
            >
              W
            </button>

            {/* A S D */}
            <div className="flex items-center gap-1.5">
              <button
                onMouseDown={() => onTriggerKey('KeyA')}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                  isKeyActive('KeyA') || isKeyActive('ArrowLeft')
                    ? 'bg-[#00e5ff] text-black border-[#00e5ff] scale-95 shadow-glowCyan'
                    : 'bg-[#141418] text-[#9ca3af] border-[#1f1f23] hover:border-[#33333d] hover:text-white'
                }`}
              >
                A
              </button>
              <button
                onMouseDown={() => onTriggerKey('KeyS')}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                  isKeyActive('KeyS') || isKeyActive('ArrowDown')
                    ? 'bg-[#00e5ff] text-black border-[#00e5ff] scale-95 shadow-glowCyan'
                    : 'bg-[#141418] text-[#9ca3af] border-[#1f1f23] hover:border-[#33333d] hover:text-white'
                }`}
              >
                S
              </button>
              <button
                onMouseDown={() => onTriggerKey('KeyD')}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${
                  isKeyActive('KeyD') || isKeyActive('ArrowRight')
                    ? 'bg-[#00e5ff] text-black border-[#00e5ff] scale-95 shadow-glowCyan'
                    : 'bg-[#141418] text-[#9ca3af] border-[#1f1f23] hover:border-[#33333d] hover:text-white'
                }`}
              >
                D
              </button>
            </div>
          </div>
        </div>

        {/* Spacebar / Action Impulse & Mouse Look */}
        <div className="space-y-3 flex flex-col justify-center">
          <button
            onMouseDown={() => onTriggerKey('Space')}
            className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all border ${
              isKeyActive('Space')
                ? 'bg-[#a855f7] text-white border-[#a855f7] scale-98 shadow-glowPurple'
                : 'bg-[#141418] text-[#9ca3af] border-[#1f1f23] hover:border-[#33333d] hover:text-white'
            }`}
          >
            <span>SPACE</span>
            <span className="text-[10px] font-normal text-gray-400">
              (Discrete Impulse / Jump)
            </span>
          </button>

          <div className="p-3 rounded-xl bg-[#141418] border border-[#1f1f23] flex items-center gap-3 text-xs text-[#9ca3af]">
            <MousePointer2 size={16} className="text-[#00e5ff] shrink-0" />
            <span className="text-[11px] leading-snug">
              Click & drag video canvas for latent camera trajectory yaw & pitch steering.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
