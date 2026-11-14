import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { LayoutGrid, CheckCircle, Loader2, ExternalLink } from 'lucide-react';

export const OutputNode = memo(({ data, selected }: NodeProps) => {
  const { label, outputFormat = 'cards', status = 'idle' } = data as any;

  return (
    <div
      className={`w-76 bg-white dark:bg-[#1e1f20] rounded-2xl border transition-all duration-200 shadow-sm ${
        selected
          ? 'border-[#34a853] ring-2 ring-[#34a853]/20 shadow-md'
          : 'border-[#e0e2ec] dark:border-[#444746] hover:border-[#a8c7fa]'
      }`}
    >
      {/* Input Socket Handle */}
      <Handle
        type="target"
        position={Position.Left}
        id="input"
        className="!w-3 !h-3 !bg-[#34a853] !border-2 !border-white dark:!border-[#1e1f20]"
      />

      {/* Node Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#f0f4f9] dark:bg-[#282a2c] rounded-t-2xl border-b border-[#e0e2ec] dark:border-[#444746]">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-[#ceead6] dark:bg-[#0f5223]/50 text-[#137333] dark:text-[#81c995]">
            <LayoutGrid size={14} />
          </div>
          <span className="text-xs font-semibold text-[#1f1f1f] dark:text-[#e3e3e3] tracking-wide">
            {label || 'Mini-App Display UI'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {status === 'running' && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-[#137333] dark:text-[#81c995] bg-[#ceead6] dark:bg-[#0f5223]/30 px-2 py-0.5 rounded-full animate-pulse">
              <Loader2 size={10} className="animate-spin" /> Rendering
            </span>
          )}
          {status === 'completed' && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-[#137333] dark:text-[#81c995] bg-[#ceead6] dark:bg-[#0f5223]/40 px-2 py-0.5 rounded-full">
              <CheckCircle size={10} /> Live Ready
            </span>
          )}
          {status === 'idle' && (
            <span className="text-[10px] font-medium text-[#444746] dark:text-[#c4c7c5] bg-white/70 dark:bg-[#1e1f20] px-2 py-0.5 rounded-full border border-[#e0e2ec] dark:border-[#444746]">
              {outputFormat.toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Node Body */}
      <div className="p-3.5 space-y-2">
        <div className="text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5]">
          Generated App Component
        </div>
        <div className="p-2.5 rounded-xl bg-[#f8fafd] dark:bg-[#131314] border border-[#e0e2ec] dark:border-[#444746] flex items-center justify-between">
          <span className="text-xs text-[#1f1f1f] dark:text-[#e3e3e3]">
            {status === 'completed' ? '✨ Interactive View populated' : 'Card View Surface'}
          </span>
          <ExternalLink size={12} className="text-[#0b57d0] dark:text-[#a8c7fa]" />
        </div>
      </div>
    </div>
  );
});
