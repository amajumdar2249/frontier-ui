import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { Terminal, Globe, Image, Hash, CheckCircle, Loader2 } from 'lucide-react';

export const InputNode = memo(({ data, selected }: NodeProps) => {
  const { label, inputType = 'text', inputValue, placeholder, status = 'idle' } = data as any;

  const renderIcon = () => {
    switch (inputType) {
      case 'url':
        return <Globe size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />;
      case 'image':
        return <Image size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />;
      case 'number':
        return <Hash size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />;
      default:
        return <Terminal size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />;
    }
  };

  return (
    <div
      className={`w-72 bg-white dark:bg-[#1e1f20] rounded-2xl border transition-all duration-200 shadow-sm ${
        selected
          ? 'border-[#0b57d0] ring-2 ring-[#0b57d0]/20 shadow-md'
          : 'border-[#e0e2ec] dark:border-[#444746] hover:border-[#a8c7fa]'
      }`}
    >
      {/* Node Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#f0f4f9] dark:bg-[#282a2c] rounded-t-2xl border-b border-[#e0e2ec] dark:border-[#444746]">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-[#d3e3fd] dark:bg-[#041e49]">
            {renderIcon()}
          </div>
          <span className="text-xs font-semibold text-[#1f1f1f] dark:text-[#e3e3e3] tracking-wide">
            {label || 'User Input'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {status === 'running' && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-[#0b57d0] dark:text-[#a8c7fa] bg-[#d3e3fd]/60 dark:bg-[#041e49]/60 px-2 py-0.5 rounded-full animate-pulse">
              <Loader2 size={10} className="animate-spin" /> Ingesting
            </span>
          )}
          {status === 'completed' && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-[#137333] dark:text-[#81c995] bg-[#e6f4ea] dark:bg-[#0f5223]/30 px-2 py-0.5 rounded-full">
              <CheckCircle size={10} /> Ready
            </span>
          )}
          {status === 'idle' && (
            <span className="text-[10px] font-medium text-[#444746] dark:text-[#c4c7c5] bg-white/70 dark:bg-[#1e1f20] px-2 py-0.5 rounded-full border border-[#e0e2ec] dark:border-[#444746]">
              {inputType.toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Node Body */}
      <div className="p-3.5 space-y-2">
        <div className="text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5]">
          Runtime Parameter
        </div>
        <div className="text-xs bg-[#f8fafd] dark:bg-[#131314] p-2.5 rounded-xl border border-[#e0e2ec] dark:border-[#444746] text-[#1f1f1f] dark:text-[#e3e3e3] line-clamp-2 font-mono">
          {inputValue || placeholder || 'Awaiting user input...'}
        </div>
      </div>

      {/* Output Socket Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        className="!w-3 !h-3 !bg-[#0b57d0] !border-2 !border-white dark:!border-[#1e1f20]"
      />
    </div>
  );
});
