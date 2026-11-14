import React, { useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  BackgroundVariant,
  Node,
  Edge,
  Connection,
  NodeChange,
  EdgeChange,
} from '@xyflow/react';
import { InputNode } from './CustomNodes/InputNode';
import { GeminiNode } from './CustomNodes/GeminiNode';
import { OutputNode } from './CustomNodes/OutputNode';

interface OpalCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  onSelectNode: (nodeId: string | null) => void;
  isDarkMode: boolean;
}

export const OpalCanvas: React.FC<OpalCanvasProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onSelectNode,
  isDarkMode,
}) => {
  const nodeTypes = useMemo(
    () => ({
      customInput: InputNode,
      customGemini: GeminiNode,
      customOutput: OutputNode,
    }),
    []
  );

  return (
    <div className="flex-1 h-[calc(100vh-4rem)] relative w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => onSelectNode(node.id)}
        onPaneClick={() => onSelectNode(null)}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={1.8}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1.5}
          color={isDarkMode ? '#333538' : '#e0e2ec'}
        />
        <Controls
          className="!bg-white dark:!bg-[#1e1f20] !border !border-[#e0e2ec] dark:!border-[#444746] !rounded-2xl !shadow-sm !overflow-hidden !p-1"
          showInteractive={false}
        />
        <MiniMap
          nodeColor={(n) => {
            if (n.data?.type === 'input') return '#0b57d0';
            if (n.data?.type === 'gemini') return '#7c4dff';
            return '#34a853';
          }}
          maskColor={isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(240, 244, 249, 0.7)'}
          className="!bg-white dark:!bg-[#1e1f20] !border !border-[#e0e2ec] dark:!border-[#444746] !rounded-2xl !shadow-sm"
          style={{ width: 140, height: 95 }}
        />
      </ReactFlow>

      {/* Canvas Floating Info Badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-white/80 dark:bg-[#1e1f20]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#e0e2ec] dark:border-[#444746] shadow-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          <span className="text-[11px] font-medium text-[#444746] dark:text-[#c4c7c5]">
            Reactive Node Graph Engine Active
          </span>
        </div>
      </div>
    </div>
  );
};
