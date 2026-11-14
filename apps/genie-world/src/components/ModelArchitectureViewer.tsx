import React from 'react';
import { Cpu, Layers, GitBranch, ShieldCheck, Zap, Box } from 'lucide-react';

export const ModelArchitectureViewer: React.FC = () => {
  return (
    <section id="architecture" className="px-4 md:px-8 max-w-7xl mx-auto space-y-8 pt-12">
      <div className="border-b border-[#1f1f23] pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#a855f7] uppercase tracking-wider mb-1">
          <Cpu size={14} />
          <span>Foundational DeepMind Architecture</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Under the Hood: Generative Foundation World Modeling
        </h2>
        <p className="text-xs text-[#9ca3af] mt-1 max-w-2xl">
          Genie 4 is composed of three interconnected neural architectures designed to turn raw video into an interactive simulator without human supervision.
        </p>
      </div>

      {/* 3 Architecture Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Pillar 1 */}
        <div className="p-6 rounded-3xl bg-[#0e0e10] border border-[#1f1f23] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff]">
            <Layers size={20} />
          </div>
          <h3 className="text-sm font-bold text-white">
            1. Spatio-Temporal Video Tokenizer
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            Compresses 60fps high-definition video frames into continuous 16x16 discrete latent grid tokens across time, preserving high-frequency motion dynamics while discarding rendering redundancy.
          </p>
          <div className="pt-2 text-[10px] font-mono text-[#00e5ff]">
            TOKEN EMBEDDING: 1024-D • TEMPORAL STRIDE: 4x
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 rounded-3xl bg-[#0e0e10] border border-[#1f1f23] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
            <GitBranch size={20} />
          </div>
          <h3 className="text-sm font-bold text-white">
            2. Latent Action Model (LAM)
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            Learns action spaces entirely unsupervised. By comparing frame transitions (z_t to z_t+1), LAM infers a discrete dictionary of latent actions corresponding to directional movement, gravity shifts, and impulses.
          </p>
          <div className="pt-2 text-[10px] font-mono text-[#a855f7]">
            UNSUPERVISED ACTIONS: 16 DISCRETE CLUSTERS
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 rounded-3xl bg-[#0e0e10] border border-[#1f1f23] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e]">
            <Zap size={20} />
          </div>
          <h3 className="text-sm font-bold text-white">
            3. Dynamics Transformer
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            An 11-billion parameter autoregressive transformer that predicts future latent states given previous history and an injected action token: P(z_t+1 | z_&le;t, a_&le;t), rolling out at 60Hz.
          </p>
          <div className="pt-2 text-[10px] font-mono text-[#22c55e]">
            LATENCY: 16.2ms • CAUSAL MASKED ATTENTION
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="rounded-3xl bg-[#0e0e10] border border-[#1f1f23] p-6 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span>Comparative Frontier Benchmark: Genie 4 vs Industry Video Models</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1f1f23] text-[#6b7280]">
                <th className="pb-3 font-normal">DIMENSION</th>
                <th className="pb-3 font-bold text-[#00e5ff]">GOOGLE DEEPMIND GENIE 4</th>
                <th className="pb-3 font-normal">OPENAI SORA</th>
                <th className="pb-3 font-normal">RUNWAY GEN-3 ALPHA</th>
                <th className="pb-3 font-normal">UNREAL ENGINE 5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f23] text-[#9ca3af]">
              <tr>
                <td className="py-3 text-white font-sans font-medium">Controllability</td>
                <td className="py-3 text-[#00e5ff] font-bold">Real-time WASD / Action Tokens</td>
                <td className="py-3">Text Prompt Only</td>
                <td className="py-3">Text / Keyframe Prompts</td>
                <td className="py-3">Handcrafted C++ scripts</td>
              </tr>
              <tr>
                <td className="py-3 text-white font-sans font-medium">Inference Latency</td>
                <td className="py-3 text-[#00e5ff] font-bold">&lt; 16.6 ms (Streaming 60 FPS)</td>
                <td className="py-3">~45 - 90 seconds (Batch)</td>
                <td className="py-3">~20 - 40 seconds (Batch)</td>
                <td className="py-3">16.6 ms (GPU Raster)</td>
              </tr>
              <tr>
                <td className="py-3 text-white font-sans font-medium">Physics Representation</td>
                <td className="py-3 text-[#00e5ff] font-bold">Latent Neural Fluid/Deformation</td>
                <td className="py-3">Visual Approximation</td>
                <td className="py-3">Visual Approximation</td>
                <td className="py-3">Rigid-Body Colliders & Chaos</td>
              </tr>
              <tr>
                <td className="py-3 text-white font-sans font-medium">Action Grounding</td>
                <td className="py-3 text-[#00e5ff] font-bold">Unsupervised from Raw Video</td>
                <td className="py-3">None</td>
                <td className="py-3">Camera path hints only</td>
                <td className="py-3">Manual Rigging & Meshes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
