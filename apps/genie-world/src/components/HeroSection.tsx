import React from 'react';
import { Play, Sparkles, Cpu, Layers, Gamepad2, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00e5ff]/10 via-[#a855f7]/15 to-[#3b82f6]/10 blur-[120px] pointer-events-none -z-10" />

      <div className="text-center space-y-4 max-w-4xl mx-auto">
        {/* Research Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e0e10] border border-[#1f1f23] text-xs font-mono text-[#00e5ff] shadow-sm">
          <Sparkles size={12} className="text-[#00e5ff]" />
          <span>Google DeepMind Frontier World Model Research</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          GENIE 4 <br />
          <span className="bg-gradient-to-r from-[#ffffff] via-[#00e5ff] to-[#a855f7] bg-clip-text text-transparent">
            Generative Interactive Environments
          </span>
        </h1>

        {/* Abstract Subtitle */}
        <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
          The first generative foundation world model trained from unlabelled video to simulate diverse,
          physics-rich interactive worlds conditioned on user actions in real time.
        </p>

        {/* Spec Metrics Row */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
          <div className="p-3.5 rounded-2xl bg-[#0e0e10] border border-[#1f1f23]">
            <div className="text-[11px] font-mono text-[#6b7280]">ROLLOUT FRAME RATE</div>
            <div className="text-lg font-bold text-[#00e5ff] font-mono mt-0.5">60 FPS</div>
            <div className="text-[10px] text-[#9ca3af]">Deterministic physics</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0e10] border border-[#1f1f23]">
            <div className="text-[11px] font-mono text-[#6b7280]">INFERENCE LATENCY</div>
            <div className="text-lg font-bold text-[#a855f7] font-mono mt-0.5">&lt; 16.6 ms</div>
            <div className="text-[10px] text-[#9ca3af]">Per-frame token stream</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0e10] border border-[#1f1f23]">
            <div className="text-[11px] font-mono text-[#6b7280]">ACTION CONDITIONING</div>
            <div className="text-lg font-bold text-white font-mono mt-0.5">Unsupervised</div>
            <div className="text-[10px] text-[#9ca3af]">Learned latent actions</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0e10] border border-[#1f1f23]">
            <div className="text-[11px] font-mono text-[#6b7280]">GRAPHICS PIPELINE</div>
            <div className="text-lg font-bold text-[#22c55e] font-mono mt-0.5">0 Polygons</div>
            <div className="text-[10px] text-[#9ca3af]">Pure neural synthesis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
