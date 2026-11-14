import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { Sparkles, Cpu, Sliders, CheckCircle, Loader2 } from 'lucide-react';

export const GeminiNode = memo(({ data, selected }: NodeProps) => {
  const { label, model = 'gemini-2.5-flash', temperature = 0.7, systemPrompt, status = 'idle' } = data as any;

  return (
    <div
      className={`w-80 bg-white dark:bg-[#1e1f20] rounded-2xl border transition-all duration-200 shadow-sm ${
        selected
          ? 'border-[#7c4dff] ring-2 ring-[#7c4dff]/25 shadow-lg'
          : 'border-[#e0e2ec] dark:border-[#444746] hover:border-[#c2e7ff]'
      }`}
    >
      {/* Input Socket Handle */}
      <Handle
        type="target"
        position={Position.Left}
        id="input"
        className="!w-3 !h-3 !bg-[#7c4dff] !border-2 !border-white dark:!border-[#1e1f20]"
      />

      {/* Node Header with Gemini Gradient styling */}
      <div className="relative px-3.5 py-2.5 rounded-t-2xl overflow-hidden border-b border-[#e0e2ec] dark:border-[#444746] bg-gradient-to-r from-[#1ba1e2]/10 via-[#7c4dff]/10 to-[#f43f5e]/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-gradient-to-br from-[#1ba1e2] via-[#7c4dff] to-[#f43f5e] text-white">
              <Sparkles size={14} />
            </div>
            <span className="text-xs font-semibold text-[#1f1f1f] dark:text-[#e3e3e3] tracking-wide">
              {label || 'Gemini Model'}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {status === 'running' && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-[#7c4dff] bg-[#7c4dff]/15 px-2 py-0.5 rounded-full animate-pulse">
                <Loader2 size={10} className="animate-spin" /> Thinking
              </span>
            )}
            {status === 'completed' && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-[#137333] dark:text-[#81c995] bg-[#e6f4ea] dark:bg-[#0f5223]/30 px-2 py-0.5 rounded-full">
                <CheckCircle size={10} /> Synthesized
              </span>
            )}
            {status === 'idle' && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-[#0b57d0] dark:text-[#a8c7fa] bg-[#d3e3fd]/60 dark:bg-[#041e49]/60 px-2 py-0.5 rounded-full">
                <Cpu size={10} /> {model}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Node Body */}
      <div className="p-3.5 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] text-[#444746] dark:text-[#c4c7c5]">
          <span className="flex items-center gap-1 font-medium">
            <Sliders size={12} /> Temp: {temperature}
          </span>
          <span className="text-[10px] font-mono text-[#0b57d0] dark:text-[#a8c7fa]">
            Context: 1M Tokens
          </span>
        </div>

        <div className="text-xs bg-[#f8fafd] dark:bg-[#131314] p-2.5 rounded-xl border border-[#e0e2ec] dark:border-[#444746] text-[#444746] dark:text-[#c4c7c5] line-clamp-2">
          {systemPrompt || 'Zero-shot reasoning model prompt...'}
        </div>
      </div>

      {/* Output Socket Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        className="!w-3 !h-3 !bg-[#7c4dff] !border-2 !border-white dark:!border-[#1e1f20]"
      />
    </div>
  );
});
