import React from 'react';
import { useWorkflowStore } from './store/workflowStore';
import { OpalHeader } from './components/OpalHeader';
import { OpalCanvas } from './components/OpalCanvas';
import { MiniAppRunner } from './components/MiniAppRunner';
import { NodeInspector } from './components/NodeInspector';
import { TemplateGalleryModal } from './components/TemplateGalleryModal';

export const App: React.FC = () => {
  const {
    currentTemplate,
    currentTemplateId,
    nodes,
    edges,
    userInputs,
    viewMode,
    isDarkMode,
    selectedNode,
    isRunning,
    isGalleryOpen,
    executionOutput,
    setViewMode,
    setIsDarkMode,
    setSelectedNodeId,
    setIsGalleryOpen,
    onNodesChange,
    onEdgesChange,
    onConnect,
    selectTemplate,
    updateNodeData,
    updateUserInput,
    addNewNode,
    runFlow,
    setNodes,
  } = useWorkflowStore();

  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify({ template: currentTemplate, nodes, edges }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `opal-flow-${currentTemplate.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleDeleteNode = (nodeId: string) => {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setSelectedNodeId(null);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-[#ffffff] dark:bg-[#131314] text-[#1f1f1f] dark:text-[#e3e3e3] overflow-hidden">
      {/* Header */}
      <OpalHeader
        currentTemplate={currentTemplate}
        viewMode={viewMode}
        isDarkMode={isDarkMode}
        isRunning={isRunning}
        onToggleViewMode={setViewMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onRunFlow={runFlow}
        onAddNode={addNewNode}
        onExportJson={handleExportJson}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 flex overflow-hidden relative">
        {viewMode === 'canvas' ? (
          <>
            <OpalCanvas
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onSelectNode={setSelectedNodeId}
              isDarkMode={isDarkMode}
            />
            {selectedNode && (
              <NodeInspector
                selectedNode={selectedNode}
                onClose={() => setSelectedNodeId(null)}
                onUpdateNodeData={updateNodeData}
                onDeleteNode={handleDeleteNode}
              />
            )}
          </>
        ) : (
          <MiniAppRunner
            template={currentTemplate}
            userInputs={userInputs}
            onUpdateInput={updateUserInput}
            onRunSimulation={runFlow}
            isRunning={isRunning}
            executionOutput={executionOutput}
            onSwitchToCanvas={() => setViewMode('canvas')}
          />
        )}
      </main>

      {/* 10 Google Labs Templates Gallery Modal */}
      <TemplateGalleryModal
        isOpen={isGalleryOpen}
        activeTemplateId={currentTemplateId}
        onSelectTemplate={selectTemplate}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
};

export default App;
