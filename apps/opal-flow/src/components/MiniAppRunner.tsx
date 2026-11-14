import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { OpalWorkflowTemplate } from '@frontier-ui/shared-tokens';

interface MiniAppRunnerProps {
  template: OpalWorkflowTemplate;
  userInputs: Record<string, string>;
  onUpdateInput: (key: string, value: string) => void;
  onRunSimulation: () => void;
  isRunning: boolean;
  executionOutput: any;
  onSwitchToCanvas: () => void;
}

export const MiniAppRunner: React.FC<MiniAppRunnerProps> = ({
  template,
  userInputs,
  onUpdateInput,
  onRunSimulation,
  isRunning,
  executionOutput,
  onSwitchToCanvas,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyItem = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const outputData = executionOutput || template.sampleOutput;

  return (
    <div className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto bg-[#f8fafd] dark:bg-[#131314] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-4xl space-y-8 pb-16">
        {/* App Hero Banner */}
        <div className="bg-white dark:bg-[#1e1f20] p-6 md:p-8 rounded-3xl border border-[#e0e2ec] dark:border-[#444746] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0b57d0]/10 via-[#7c4dff]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0b57d0] dark:text-[#a8c7fa] bg-[#d3e3fd]/60 dark:bg-[#041e49]/60 px-3 py-1 rounded-full">
                  {template.category}
                </span>
                <span className="text-xs text-gray-400">• Google Labs Opal Mini-App</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1f1f1f] dark:text-[#e3e3e3]">
                {template.title}
              </h1>
              <p className="mt-1 text-sm text-[#444746] dark:text-[#c4c7c5] max-w-xl">
                {template.tagline}
              </p>
            </div>

            <button
              onClick={onSwitchToCanvas}
              className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#e0e2ec] dark:border-[#444746] hover:bg-[#f0f4f9] dark:hover:bg-[#282a2c] text-xs font-medium text-[#444746] dark:text-[#c4c7c5] transition-colors"
            >
              <Layers size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />
              <span>Inspect Workflow Graph</span>
            </button>
          </div>
        </div>

        {/* Inputs Configuration Form */}
        <div className="bg-white dark:bg-[#1e1f20] p-6 md:p-8 rounded-3xl border border-[#e0e2ec] dark:border-[#444746] shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#1f1f1f] dark:text-[#e3e3e3] flex items-center gap-2">
              <span>Parameters & Inputs</span>
              <span className="text-xs font-normal text-gray-400">
                ({Object.keys(template.defaultInputs).length} fields configured)
              </span>
            </h2>
            <button
              onClick={() => {
                Object.entries(template.defaultInputs).forEach(([k, v]) => onUpdateInput(k, v));
              }}
              className="text-xs text-[#0b57d0] dark:text-[#a8c7fa] hover:underline flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Reset Defaults</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {Object.entries(template.defaultInputs).map(([key, defaultVal]) => (
              <div key={key} className="space-y-1.5">
                <label className="block text-xs font-medium text-[#1f1f1f] dark:text-[#e3e3e3] capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="text"
                  value={userInputs[key] ?? defaultVal}
                  onChange={(e) => onUpdateInput(key, e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-2xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#0b57d0] dark:focus:border-[#a8c7fa] focus:bg-white dark:focus:bg-[#131314] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none transition-all"
                  placeholder={`Enter ${key}...`}
                />
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-[#444746] dark:text-[#c4c7c5] flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />
              <span>Model: Gemini 2.5 Flash • Latency: ~0.4s</span>
            </div>

            <button
              onClick={onRunSimulation}
              disabled={isRunning}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-md transition-all ${
                isRunning
                  ? 'bg-[#0b57d0]/60 cursor-not-allowed'
                  : 'bg-[#0b57d0] hover:bg-[#0842a0] hover:shadow-lg active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <Sparkles size={14} className="animate-spin" />
                  <span>Synthesizing Response...</span>
                </>
              ) : (
                <>
                  <span>Run Mini-App</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Output Section */}
        {outputData && (
          <div className="bg-white dark:bg-[#1e1f20] p-6 md:p-8 rounded-3xl border border-[#e0e2ec] dark:border-[#444746] shadow-sm space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-[#e0e2ec] dark:border-[#444746]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-[#ceead6] dark:bg-[#0f5223]/50 text-[#137333] dark:text-[#81c995]">
                    <CheckCircle2 size={16} />
                  </span>
                  <h3 className="text-lg font-bold text-[#1f1f1f] dark:text-[#e3e3e3]">
                    {outputData.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[#444746] dark:text-[#c4c7c5]">
                  {outputData.summary}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyItem(JSON.stringify(outputData, null, 2), -1)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-xs font-medium text-[#444746] dark:text-[#c4c7c5] transition-colors"
                >
                  {copiedIndex === -1 ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  <span>Copy All</span>
                </button>
              </div>
            </div>

            {/* Render Items Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outputData.items?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f8fafd] dark:bg-[#131314] border border-[#e0e2ec] dark:border-[#444746] flex flex-col justify-between hover:border-[#a8c7fa] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-[#1f1f1f] dark:text-[#e3e3e3]">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-[#d3e3fd]/70 dark:bg-[#041e49]/70 text-[#0b57d0] dark:text-[#a8c7fa] px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="text-[11px] font-medium text-[#0b57d0] dark:text-[#a8c7fa] mb-2">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-[#444746] dark:text-[#c4c7c5] whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e0e2ec]/60 dark:border-[#444746]/60 flex items-center justify-end">
                    <button
                      onClick={() => handleCopyItem(`${item.title}\n${item.content}`, idx)}
                      className="text-[11px] text-[#444746] dark:text-[#c4c7c5] hover:text-[#0b57d0] flex items-center gap-1"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check size={12} className="text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
