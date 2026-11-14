/**
 * Shared Type Definitions for Frontier UI
 */

// --- Opal Workflow Types ---

export type OpalNodeType = 'input' | 'gemini' | 'transform' | 'output';

export interface OpalNodeData {
  label: string;
  type: OpalNodeType;
  description?: string;
  // Node-specific values
  inputLabel?: string;
  inputType?: 'text' | 'image' | 'url' | 'number';
  inputValue?: string;
  defaultValue?: string;
  placeholder?: string;
  // Gemini model settings
  model?: 'gemini-2.5-flash' | 'gemini-1.5-pro' | 'gemini-2.0-flash-exp';
  systemPrompt?: string;
  userPromptTemplate?: string;
  temperature?: number;
  outputFormat?: 'markdown' | 'json' | 'cards' | 'html';
  // Transform settings
  transformType?: 'extract_json' | 'list_to_cards' | 'quiz_parser' | 'passthrough';
  // State
  status?: 'idle' | 'running' | 'completed' | 'error';
  lastOutput?: any;
}

export interface OpalWorkflowTemplate {
  id: string;
  title: string;
  tagline: string;
  category: string;
  iconName: string;
  badge?: string;
  defaultInputs: Record<string, string>;
  nodes: any[];
  edges: any[];
  sampleOutput: {
    title: string;
    summary: string;
    items?: Array<{ title: string; subtitle?: string; content: string; badge?: string; url?: string }>;
    rawText?: string;
  };
}

// --- Genie World Simulator Types ---

export interface GenieSimulationAsset {
  id: string;
  title: string;
  category: 'Fauna' | 'Optics' | 'Physics' | 'Fluid Dynamics' | 'Deformation' | 'Robotics' | 'Atmospheric' | 'Interactive World';
  prompt: string;
  videoUrl: string;
  fps: number;
  resolution: string;
  actionConditioned: boolean;
  controllable: boolean;
  tags: string[];
  physicsBreakdown: string[];
  telemetry: {
    latentDimensions: string;
    actionHorizonSec: number;
    inferenceLatencyMs: number;
    sampleRateHz: number;
  };
}

export interface SimulationTelemetry {
  fps: number;
  latencyMs: number;
  frameIndex: number;
  activeActionTokens: string[];
  worldStateHash: string;
  entropy: number;
  temperature: number;
}
