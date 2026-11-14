import React from 'react';
import { DeepMindLogo } from '@frontier-ui/shared-tokens';
import { Terminal, ExternalLink, Code2, Radio } from 'lucide-react';

export const GenieNavbar: React.FC = () => {
  return (
    <header className="h-16 px-4 md:px-8 border-b border-[#1f1f23] bg-[#000000]/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
      {/* Left: DeepMind Brand */}
      <div className="flex items-center gap-4">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <DeepMindLogo size={26} className="group-hover:scale-105 transition-transform" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-semibold text-sm tracking-tight text-white">
              Google DeepMind
            </span>
            <span className="text-xs font-mono text-[#00e5ff] font-medium tracking-wider">
              GENIE 4
            </span>
          </div>
        </a>

        <div className="h-5 w-px bg-[#1f1f23] hidden sm:block" />

        {/* Live GCS Storage Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0e10] border border-[#1f1f23] text-[11px] font-mono text-[#9ca3af]">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
          <span>GCS Video Streams Connected</span>
        </div>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-6 text-xs text-[#9ca3af]">
        <a href="#simulator" className="hover:text-[#00e5ff] transition-colors">
          Interactive Simulator
        </a>
        <a href="#gallery" className="hover:text-[#00e5ff] transition-colors">
          19 GCS Assets
        </a>
        <a href="#architecture" className="hover:text-[#00e5ff] transition-colors">
          Neural Architecture
        </a>
        <a href="#benchmarks" className="hover:text-[#00e5ff] transition-colors">
          Robotics & Benchmarks
        </a>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <a
          href="https://deepmind.google/models/genie/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs text-[#9ca3af] hover:text-white transition-colors"
        >
          <span>Official Paper</span>
          <ExternalLink size={12} />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#0e0e10] hover:bg-[#1c1c22] border border-[#1f1f23] text-[#9ca3af] hover:text-white transition-colors"
          title="GitHub Monorepo"
        >
          <Code2 size={15} />
        </a>
      </div>
    </header>
  );
};
