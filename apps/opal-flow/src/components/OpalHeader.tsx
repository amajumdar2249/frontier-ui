import React, { useState } from 'react';
import {
  Play,
  Moon,
  Sun,
  Layers,
  Sparkles,
  Share2,
  Download,
  Plus,
  MonitorPlay,
  Workflow,
  Check,
} from 'lucide-react';
import { OpalWorkflowTemplate } from '@frontier-ui/shared-tokens';

interface OpalHeaderProps {
  currentTemplate: OpalWorkflowTemplate;
  viewMode: 'canvas' | 'app';
  isDarkMode: boolean;
  isRunning: boolean;
  onToggleViewMode: (mode: 'canvas' | 'app') => void;
  onToggleDarkMode: () => void;
  onOpenGallery: () => void;
  onRunFlow: () => void;
  onAddNode: (type: 'input' | 'gemini' | 'transform' | 'output') => void;
  onExportJson: () => void;
}

export const OpalHeader: React.FC<OpalHeaderProps> = ({
  currentTemplate,
  viewMode,
  isDarkMode,
  isRunning,
  onToggleViewMode,
  onToggleDarkMode,
  onOpenGallery,
  onRunFlow,
  onAddNode,
  onExportJson,
}) => {
  const [copied, setCopied] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  const handleShare = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="h-16 px-4 md:px-6 bg-white dark:bg-[#131314] border-b border-[#e0e2ec] dark:border-[#444746] flex items-center justify-between z-30 relative select-none">
      {/* Left: Brand + Active Template */}
      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex items-center gap-2.5">
          {/* Opal Logo Badge */}
          <div className="w-9 h-9 rounded-xl bg-[#0b57d0] flex items-center justify-center shadow-sm">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="3" fill="#FFFFFF" />
              <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
              <circle cx="16" cy="8" r="2.5" fill="#93C5FD" />
              <path d="M8 8L16 8L16 16" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm tracking-tight text-[#1f1f1f] dark:text-[#e3e3e3]">
                Google Opal
              </span>
              <span className="text-[10px] font-medium bg-[#f0f4f9] dark:bg-[#282a2c] text-[#0b57d0] dark:text-[#a8c7fa] px-1.5 py-0.5 rounded-full border border-[#e0e2ec] dark:border-[#444746]">
                Labs
              </span>
            </div>
            <div className="text-[11px] text-[#444746] dark:text-[#c4c7c5] hidden sm:block">
              Frontier AI Mini-App Builder
            </div>
          </div>
        </div>

        <div className="h-6 w-px bg-[#e0e2ec] dark:bg-[#444746] hidden sm:block" />

        {/* Template Selector Button */}
        <button
          onClick={onOpenGallery}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-xs font-medium text-[#1f1f1f] dark:text-[#e3e3e3] border border-[#e0e2ec] dark:border-[#444746] transition-colors"
          title="Browse 10 Google Labs Mini-App Templates"
        >
          <Layers size={14} className="text-[#0b57d0] dark:text-[#a8c7fa]" />
          <span className="max-w-[130px] sm:max-w-[180px] truncate">{currentTemplate.title}</span>
          <span className="text-[10px] bg-[#d3e3fd] dark:bg-[#041e49] text-[#0b57d0] dark:text-[#a8c7fa] px-1.5 py-0.2 rounded-full">
            Templates
          </span>
        </button>
      </div>

      {/* Center: Builder vs Mini-App Mode Switcher */}
      <div className="bg-[#f0f4f9] dark:bg-[#1e1f20] p-1 rounded-full border border-[#e0e2ec] dark:border-[#444746] flex items-center shadow-inner">
        <button
          onClick={() => onToggleViewMode('canvas')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            viewMode === 'canvas'
              ? 'bg-white dark:bg-[#282a2c] text-[#0b57d0] dark:text-[#a8c7fa] shadow-sm font-semibold'
              : 'text-[#444746] dark:text-[#c4c7c5] hover:text-[#1f1f1f] dark:hover:text-white'
          }`}
        >
          <Workflow size={13} />
          <span>Flow Canvas</span>
        </button>
        <button
          onClick={() => onToggleViewMode('app')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            viewMode === 'app'
              ? 'bg-[#0b57d0] text-white shadow-sm font-semibold'
              : 'text-[#444746] dark:text-[#c4c7c5] hover:text-[#1f1f1f] dark:hover:text-white'
          }`}
        >
          <MonitorPlay size={13} />
          <span>Mini-App View</span>
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Add Node Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-[#1f1f1f] dark:text-[#e3e3e3] border border-[#e0e2ec] dark:border-[#444746] transition-colors"
          >
            <Plus size={13} className="text-[#0b57d0] dark:text-[#a8c7fa]" />
            <span className="hidden sm:inline">Add Node</span>
          </button>
          {isAddMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1e1f20] border border-[#e0e2ec] dark:border-[#444746] rounded-xl shadow-lg p-1.5 z-50 text-xs">
              <button
                onClick={() => {
                  onAddNode('input');
                  setIsAddMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f0f4f9] dark:hover:bg-[#282a2c] flex items-center justify-between"
              >
                <span>Input Prompt Node</span>
                <span className="text-[10px] text-gray-400">Text/URL</span>
              </button>
              <button
                onClick={() => {
                  onAddNode('gemini');
                  setIsAddMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f0f4f9] dark:hover:bg-[#282a2c] flex items-center justify-between"
              >
                <span>Gemini Model Node</span>
                <span className="text-[10px] text-[#7c4dff]">2.5 Flash</span>
              </button>
              <button
                onClick={() => {
                  onAddNode('output');
                  setIsAddMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f0f4f9] dark:hover:bg-[#282a2c] flex items-center justify-between"
              >
                <span>Mini-App Card Node</span>
                <span className="text-[10px] text-green-600">UI</span>
              </button>
            </div>
          )}
        </div>

        {/* Run Flow Action Button */}
        <button
          onClick={onRunFlow}
          disabled={isRunning}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white shadow-sm transition-all ${
            isRunning
              ? 'bg-[#0b57d0]/70 cursor-not-allowed'
              : 'bg-[#0b57d0] hover:bg-[#0842a0] active:scale-95'
          }`}
        >
          {isRunning ? (
            <>
              <Sparkles size={13} className="animate-spin text-white" />
              <span>Simulating...</span>
            </>
          ) : (
            <>
              <Play size={13} className="fill-white" />
              <span>Run Flow</span>
            </>
          )}
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-[#444746] dark:text-[#c4c7c5] transition-colors"
          title="Share mini-app link"
        >
          {copied ? <Check size={15} className="text-green-600" /> : <Share2 size={15} />}
        </button>

        {/* Export JSON Button */}
        <button
          onClick={onExportJson}
          className="p-2 rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-[#444746] dark:text-[#c4c7c5] transition-colors"
          title="Export Workflow JSON"
        >
          <Download size={15} />
        </button>

        {/* Dark/Light mode toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] hover:bg-[#e0e2ec] dark:hover:bg-[#333538] text-[#444746] dark:text-[#c4c7c5] transition-colors"
          title="Toggle Light / Dark mode"
        >
          {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
        </button>
      </div>
    </header>
  );
};
