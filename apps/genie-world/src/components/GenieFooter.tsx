import React from 'react';
import { DeepMindLogo } from '@frontier-ui/shared-tokens';
import { ExternalLink, Code2 } from 'lucide-react';

export const GenieFooter: React.FC = () => {
  return (
    <footer className="border-t border-[#1f1f23] bg-[#050507] py-12 px-4 md:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <DeepMindLogo size={24} />
          <div>
            <div className="text-xs font-semibold text-white">
              Google DeepMind Genie 4 World Simulator
            </div>
            <div className="text-[11px] text-[#6b7280]">
              Faithful open-source clone created for Frontier AI research
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#9ca3af]">
          <a
            href="https://deepmind.google/models/genie/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Original DeepMind Showcase</span>
            <ExternalLink size={11} />
          </a>
          <a
            href="https://opal.google/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Google Labs Opal</span>
            <ExternalLink size={11} />
          </a>
          <span className="text-[#6b7280]">Apache 2.0 License</span>
        </div>
      </div>
    </footer>
  );
};
