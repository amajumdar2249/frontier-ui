import React from 'react';
import { X, Sliders, Cpu, Terminal, Sparkles, Trash2 } from 'lucide-react';
import { Node } from '@xyflow/react';

interface NodeInspectorProps {
  selectedNode: Node | null;
  onClose: () => void;
  onUpdateNodeData: (nodeId: string, updates: Record<string, any>) => void;
  onDeleteNode?: (nodeId: string) => void;
}

export const NodeInspector: React.FC<NodeInspectorProps> = ({
  selectedNode,
  onClose,
  onUpdateNodeData,
  onDeleteNode,
}) => {
  if (!selectedNode) return null;

  const data = (selectedNode.data || {}) as Record<string, any>;
  const nodeType = data.type || 'input';

  return (
    <aside className="w-80 h-[calc(100vh-4rem)] bg-white dark:bg-[#1e1f20] border-l border-[#e0e2ec] dark:border-[#444746] flex flex-col z-20 shadow-lg animate-slideLeft select-none">
      {/* Header */}
      <div className="p-4 border-b border-[#e0e2ec] dark:border-[#444746] flex items-center justify-between bg-[#f8fafd] dark:bg-[#131314]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#d3e3fd] dark:bg-[#041e49] text-[#0b57d0] dark:text-[#a8c7fa]">
            {nodeType === 'input' && <Terminal size={14} />}
            {nodeType === 'gemini' && <Sparkles size={14} />}
            {nodeType === 'output' && <Cpu size={14} />}
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#1f1f1f] dark:text-[#e3e3e3]">
              Inspector
            </h3>
            <span className="text-[10px] text-gray-400 font-mono">{selectedNode.id}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-[#e0e2ec] dark:hover:bg-[#282a2c] text-[#444746] dark:text-[#c4c7c5]"
        >
          <X size={16} />
        </button>
      </div>

      {/* Body Controls */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {/* Node Label */}
        <div>
          <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
            Node Label
          </label>
          <input
            type="text"
            value={String(data.label || '')}
            onChange={(e) => onUpdateNodeData(selectedNode.id, { label: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#0b57d0] dark:focus:border-[#a8c7fa] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none"
          />
        </div>

        {/* Input Node Specific */}
        {nodeType === 'input' && (
          <>
            <div>
              <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
                Input Type
              </label>
              <select
                value={String(data.inputType || 'text')}
                onChange={(e) => onUpdateNodeData(selectedNode.id, { inputType: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#0b57d0] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none"
              >
                <option value="text">Text String</option>
                <option value="url">Web / YouTube URL</option>
                <option value="image">Image File Input</option>
                <option value="number">Numeric Parameter</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
                Default Value / User Content
              </label>
              <textarea
                rows={3}
                value={String(data.inputValue || '')}
                onChange={(e) => onUpdateNodeData(selectedNode.id, { inputValue: e.target.value })}
                placeholder="Enter default parameter value..."
                className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#0b57d0] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none resize-none font-mono text-[11px]"
              />
            </div>
          </>
        )}

        {/* Gemini Node Specific */}
        {nodeType === 'gemini' && (
          <>
            <div>
              <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
                Gemini Model
              </label>
              <select
                value={String(data.model || 'gemini-2.5-flash')}
                onChange={(e) => onUpdateNodeData(selectedNode.id, { model: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#7c4dff] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none"
              >
                <option value="gemini-2.5-flash">Gemini 2.5 Flash (Ultra-fast)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Reasoning)</option>
                <option value="gemini-2.0-flash-exp">Gemini 2.0 Flash Experimental</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] flex items-center gap-1">
                  <Sliders size={12} /> Temperature
                </label>
                <span className="font-mono text-[11px] text-[#7c4dff] font-semibold">
                  {typeof data.temperature === 'number' ? data.temperature : 0.7}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={typeof data.temperature === 'number' ? data.temperature : 0.7}
                onChange={(e) =>
                  onUpdateNodeData(selectedNode.id, { temperature: parseFloat(e.target.value) })
                }
                className="w-full accent-[#7c4dff]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
                System Prompt Instructions
              </label>
              <textarea
                rows={5}
                value={String(data.systemPrompt || '')}
                onChange={(e) => onUpdateNodeData(selectedNode.id, { systemPrompt: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#7c4dff] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none resize-none text-[11px] leading-relaxed"
              />
            </div>
          </>
        )}

        {/* Output Node Specific */}
        {nodeType === 'output' && (
          <div>
            <label className="block text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5] mb-1.5">
              UI Presentation Format
            </label>
            <select
              value={String(data.outputFormat || 'cards')}
              onChange={(e) => onUpdateNodeData(selectedNode.id, { outputFormat: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#34a853] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none"
            >
              <option value="cards">Material Cards Layout</option>
              <option value="markdown">Rich Markdown Prose</option>
              <option value="json">Structured JSON Tree</option>
            </select>
          </div>
        )}
      </div>

      {/* Footer / Delete */}
      {onDeleteNode && (
        <div className="p-3 border-t border-[#e0e2ec] dark:border-[#444746] bg-[#f8fafd] dark:bg-[#131314]">
          <button
            onClick={() => onDeleteNode(selectedNode.id)}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-colors text-xs font-medium"
          >
            <Trash2 size={13} />
            <span>Remove Node</span>
          </button>
        </div>
      )}
    </aside>
  );
};
