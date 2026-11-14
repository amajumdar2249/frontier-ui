import React from 'react';
import { Bot, CheckCircle, BarChart3, ShieldCheck } from 'lucide-react';

export const BenchmarkSection: React.FC = () => {
  return (
    <section id="benchmarks" className="px-4 md:px-8 max-w-7xl mx-auto space-y-6 pt-12 pb-8">
      <div className="border-b border-[#1f1f23] pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#22c55e] uppercase tracking-wider mb-1">
          <Bot size={14} />
          <span>Embodied AI & Robotics Transfer</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Sim-to-Real Robotics Evaluation
        </h2>
        <p className="text-xs text-[#9ca3af] mt-1 max-w-2xl">
          By training robotic policies inside Genie 4 generated neural environments, embodied agents learn continuous manipulation and locomotion before physical deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 rounded-3xl bg-[#0e0e10] border border-[#1f1f23] space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
            <span>Robotic Policy Generalization</span>
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            Policy networks trained in Genie 4 achieve an 87.4% zero-shot success rate when transferred to physical UR5 robotic manipulators, validating that latent physical dynamics mirror real-world contact mechanics.
          </p>
          <div className="space-y-2 pt-2 text-xs font-mono">
            <div className="flex justify-between text-[#9ca3af]">
              <span>Zero-Shot Sim-to-Real Transfer</span>
              <span className="text-[#00e5ff] font-bold">87.4%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#1f1f23] overflow-hidden">
              <div className="h-full bg-[#00e5ff] rounded-full" style={{ width: '87.4%' }} />
            </div>

            <div className="flex justify-between text-[#9ca3af] pt-2">
              <span>Trajectory Controllability Fidelity</span>
              <span className="text-[#a855f7] font-bold">92.1%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#1f1f23] overflow-hidden">
              <div className="h-full bg-[#a855f7] rounded-full" style={{ width: '92.1%' }} />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0e0e10] border border-[#1f1f23] space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span>Infinite Synthetic Training Data</span>
          </h3>
          <p className="text-xs text-[#9ca3af] leading-relaxed">
            Traditional robotics requires million-dollar hardware rigs and thousands of hours of manual teleoperation. Genie 4 can roll out 10,000 parallel interactive environments simultaneously on TPU v5p clusters.
          </p>
          <ul className="text-xs text-[#9ca3af] space-y-2 pt-1 font-mono">
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#22c55e]" />
              <span>Zero human teleoperation needed for action grounding</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#22c55e]" />
              <span>Physics violations detected and penalized during rollout</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#22c55e]" />
              <span>Direct integration with RT-2 and Gemini Robotics</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
