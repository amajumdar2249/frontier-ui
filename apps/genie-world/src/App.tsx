import React from 'react';
import { useSimulationStore } from './store/simulationStore';
import { GenieNavbar } from './components/GenieNavbar';
import { HeroSection } from './components/HeroSection';
import { SimulatorStage } from './components/SimulatorStage';
import { VideoAssetCarousel } from './components/VideoAssetCarousel';
import { ModelArchitectureViewer } from './components/ModelArchitectureViewer';
import { BenchmarkSection } from './components/BenchmarkSection';
import { GenieFooter } from './components/GenieFooter';

export const App: React.FC = () => {
  const {
    currentSimulation,
    currentId,
    isPlaying,
    playbackSpeed,
    activeKeys,
    actionLog,
    worldPrompt,
    hudVisible,
    aspectRatio,
    isGenerating,
    liveLatency,
    liveFps,
    selectSimulation,
    togglePlay,
    setPlaybackSpeed,
    setWorldPrompt,
    setHudVisible,
    setAspectRatio,
    triggerKeyAction,
    generateNewWorld,
  } = useSimulationStore();

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-[#00e5ff]/30 selection:text-[#00e5ff]">
      {/* Navigation */}
      <GenieNavbar />

      {/* Main Container */}
      <main className="flex-1 space-y-12 pb-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Primary Interactive World Simulator Stage */}
        <SimulatorStage
          simulation={currentSimulation}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          activeKeys={activeKeys}
          actionLog={actionLog}
          worldPrompt={worldPrompt}
          hudVisible={hudVisible}
          aspectRatio={aspectRatio}
          isGenerating={isGenerating}
          liveLatency={liveLatency}
          liveFps={liveFps}
          onTogglePlay={togglePlay}
          onSetSpeed={setPlaybackSpeed}
          onSetPrompt={setWorldPrompt}
          onSetHudVisible={setHudVisible}
          onSetAspectRatio={setAspectRatio}
          onTriggerKey={triggerKeyAction}
          onGenerateNewWorld={generateNewWorld}
        />

        {/* 10 Google Cloud Storage Simulation Videos Carousel */}
        <VideoAssetCarousel
          currentId={currentId}
          onSelectSimulation={selectSimulation}
        />

        {/* DeepMind Neural Architecture Breakdown */}
        <ModelArchitectureViewer />

        {/* Embodied AI & Robotics Benchmarks */}
        <BenchmarkSection />
      </main>

      {/* Footer */}
      <GenieFooter />
    </div>
  );
};

export default App;
