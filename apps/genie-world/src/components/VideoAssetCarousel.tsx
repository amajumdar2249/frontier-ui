import React, { useState } from 'react';
import { Play, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { GENIE_SIMULATIONS } from '../data/simulations';

interface VideoAssetCarouselProps {
  currentId: string;
  onSelectSimulation: (id: string) => void;
}

export const VideoAssetCarousel: React.FC<VideoAssetCarouselProps> = ({
  currentId,
  onSelectSimulation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fauna', 'Optics', 'Physics', 'Fluid Dynamics', 'Deformation', 'Atmospheric', 'Interactive World'];

  const filtered = GENIE_SIMULATIONS.filter(
    (sim) => selectedCategory === 'All' || sim.category === selectedCategory
  );

  return (
    <section id="gallery" className="px-4 md:px-8 max-w-7xl mx-auto space-y-6 pt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1f1f23] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00e5ff] uppercase tracking-wider mb-1">
            <Sparkles size={14} />
            <span>Official Google Cloud Storage Extractions</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            10 Interactive World Simulation Assets
          </h2>
          <p className="text-xs text-[#9ca3af] mt-1">
            Zero-shot physical environments generated purely by the Genie 4 latent world model.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#00e5ff] text-black font-semibold'
                  : 'bg-[#0e0e10] text-[#9ca3af] hover:text-white border border-[#1f1f23]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Simulation Assets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((sim) => {
          const isSelected = sim.id === currentId;

          return (
            <div
              key={sim.id}
              onClick={() => onSelectSimulation(sim.id)}
              className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-200 flex flex-col justify-between bg-[#0e0e10] ${
                isSelected
                  ? 'border-[#00e5ff] shadow-glowCyan ring-1 ring-[#00e5ff]'
                  : 'border-[#1f1f23] hover:border-[#33333d] hover:bg-[#141418]'
              }`}
            >
              {/* Video Thumbnail with subtle preview */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <video
                  src={sim.videoUrl}
                  muted
                  playsInline
                  loop
                  autoPlay={isSelected}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#00e5ff] border border-white/10">
                    {sim.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {sim.fps} FPS
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3 p-1 rounded-full bg-[#00e5ff] text-black">
                    <CheckCircle2 size={14} />
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    {sim.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 line-clamp-2 leading-relaxed">
                    {sim.prompt}
                  </p>
                </div>

                {/* Physics Phenomena Breakdown Tags */}
                <div className="space-y-1.5 pt-2 border-t border-[#1f1f23]">
                  <div className="text-[10px] font-mono text-[#6b7280]">
                    SIMULATED PHENOMENA:
                  </div>
                  <ul className="text-[11px] text-[#9ca3af] space-y-0.5">
                    {sim.physicsBreakdown.slice(0, 2).map((item, i) => (
                      <li key={i} className="truncate flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#a855f7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#6b7280]">
                  <span>LATENCY: {sim.telemetry.inferenceLatencyMs}ms</span>
                  <span className="text-[#00e5ff] group-hover:underline">
                    {isSelected ? 'ACTIVE IN STAGE' : 'LOAD TO STAGE →'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
