import { useState, useCallback, useEffect } from 'react';
import {
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Connection,
  NodeChange,
  EdgeChange,
} from '@xyflow/react';
import confetti from 'canvas-confetti';
import { OPAL_TEMPLATES } from '../data/templates';
import { OpalWorkflowTemplate } from '@frontier-ui/shared-tokens';

export function useWorkflowStore() {
  const [currentTemplateId, setCurrentTemplateId] = useState<string>('book-recs');
  const [templates] = useState<OpalWorkflowTemplate[]>(OPAL_TEMPLATES);
  const [viewMode, setViewMode] = useState<'canvas' | 'app'>('canvas');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [executionOutput, setExecutionOutput] = useState<any>(null);

  // Initialize nodes and edges from current template
  const initialTemplate = OPAL_TEMPLATES[0];
  const [nodes, setNodes] = useState<Node[]>(initialTemplate.nodes);
  const [edges, setEdges] = useState<Edge[]>(initialTemplate.edges);
  const [userInputs, setUserInputs] = useState<Record<string, string>>(initialTemplate.defaultInputs);

  // Sync dark mode class on HTML document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
    },
    []
  );

  const selectTemplate = useCallback((templateId: string) => {
    const tmpl = OPAL_TEMPLATES.find((t) => t.id === templateId);
    if (!tmpl) return;

    setCurrentTemplateId(templateId);
    // Deep clone nodes and edges to avoid mutation
    const newNodes = JSON.parse(JSON.stringify(tmpl.nodes));
    const newEdges = JSON.parse(JSON.stringify(tmpl.edges));
    setNodes(newNodes);
    setEdges(newEdges);
    setUserInputs({ ...tmpl.defaultInputs });
    setExecutionOutput(tmpl.sampleOutput);
    setSelectedNodeId(null);
    setIsGalleryOpen(false);
  }, []);

  const updateNodeData = useCallback((nodeId: string, updates: Record<string, any>) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              ...updates,
            },
          };
        }
        return node;
      })
    );
  }, []);

  const updateUserInput = useCallback((key: string, value: string) => {
    setUserInputs((prev) => ({ ...prev, [key]: value }));

    // Also update any matching input nodes in canvas
    setNodes((nds) =>
      nds.map((n) => {
        if (n.data?.type === 'input') {
          // match if node label is close or first node
          return {
            ...n,
            data: {
              ...n.data,
              inputValue: value,
            },
          };
        }
        return n;
      })
    );
  }, []);

  const addNewNode = useCallback((type: 'input' | 'gemini' | 'transform' | 'output') => {
    const id = `node-${type}-${Date.now().toString().slice(-4)}`;
    const xPos = 250 + Math.random() * 200;
    const yPos = 180 + Math.random() * 150;

    let nodeData: any = {
      label: 'New Node',
      type,
      status: 'idle',
    };

    if (type === 'input') {
      nodeData = {
        ...nodeData,
        label: 'User Prompt Input',
        inputType: 'text',
        inputValue: '',
        placeholder: 'Enter input prompt...',
      };
    } else if (type === 'gemini') {
      nodeData = {
        ...nodeData,
        label: 'Gemini 2.5 Flash',
        model: 'gemini-2.5-flash',
        temperature: 0.7,
        systemPrompt: 'You are an intelligent Google Labs AI model assistant.',
      };
    } else if (type === 'transform') {
      nodeData = {
        ...nodeData,
        label: 'JSON Parser & Transformer',
        transformType: 'extract_json',
      };
    } else if (type === 'output') {
      nodeData = {
        ...nodeData,
        label: 'Mini-App Result Card',
        outputFormat: 'cards',
      };
    }

    const newNode: Node = {
      id,
      type: type === 'input' ? 'customInput' : type === 'gemini' ? 'customGemini' : 'customOutput',
      position: { x: xPos, y: yPos },
      data: nodeData,
    };

    setNodes((nds) => [...nds, newNode]);
    setSelectedNodeId(id);
  }, []);

  const runFlow = useCallback(async () => {
    if (isRunning) return;
    setIsRunning(true);

    // Step 1: Set input nodes to running
    setNodes((nds) =>
      nds.map((n) =>
        n.data?.type === 'input'
          ? { ...n, data: { ...n.data, status: 'running' } }
          : { ...n, data: { ...n.data, status: 'idle' } }
      )
    );

    await new Promise((r) => setTimeout(r, 600));

    // Step 2: Set input nodes to completed, gemini nodes to running
    setNodes((nds) =>
      nds.map((n) => {
        if (n.data?.type === 'input') return { ...n, data: { ...n.data, status: 'completed' } };
        if (n.data?.type === 'gemini') return { ...n, data: { ...n.data, status: 'running' } };
        return n;
      })
    );

    await new Promise((r) => setTimeout(r, 900));

    // Step 3: Set gemini to completed, output to running
    setNodes((nds) =>
      nds.map((n) => {
        if (n.data?.type === 'gemini') return { ...n, data: { ...n.data, status: 'completed' } };
        if (n.data?.type === 'output') return { ...n, data: { ...n.data, status: 'running' } };
        return n;
      })
    );

    await new Promise((r) => setTimeout(r, 700));

    // Step 4: Complete output node
    setNodes((nds) =>
      nds.map((n) =>
        n.data?.type === 'output'
          ? { ...n, data: { ...n.data, status: 'completed' } }
          : n
      )
    );

    // Produce current template sample output
    const activeTemplate = OPAL_TEMPLATES.find((t) => t.id === currentTemplateId) || OPAL_TEMPLATES[0];
    setExecutionOutput(activeTemplate.sampleOutput);
    setIsRunning(false);

    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0B57D0', '#4285F4', '#34A853', '#FBBC04', '#EA4335'],
      });
    } catch (e) {
      // ignore
    }
  }, [isRunning, currentTemplateId]);

  return {
    templates,
    currentTemplateId,
    currentTemplate: OPAL_TEMPLATES.find((t) => t.id === currentTemplateId) || OPAL_TEMPLATES[0],
    nodes,
    edges,
    userInputs,
    viewMode,
    isDarkMode,
    selectedNodeId,
    isRunning,
    isGalleryOpen,
    executionOutput,
    selectedNode: nodes.find((n) => n.id === selectedNodeId) || null,
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
    setEdges,
  };
}
