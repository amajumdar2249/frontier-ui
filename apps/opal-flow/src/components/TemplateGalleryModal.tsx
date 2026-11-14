import React, { useState } from 'react';
import {
  X,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  Building2,
  Castle,
  Headphones,
  GraduationCap,
  Share2,
  Video,
  FileText,
} from 'lucide-react';
import { OPAL_TEMPLATES } from '../data/templates';
import { OpalWorkflowTemplate } from '@frontier-ui/shared-tokens';

interface TemplateGalleryModalProps {
  isOpen: boolean;
  activeTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
  onClose: () => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Building2,
  Castle,
  Sparkles,
  Headphones,
  GraduationCap,
  Search,
  Share2,
  Video,
  FileText,
};

export const TemplateGalleryModal: React.FC<TemplateGalleryModalProps> = ({
  isOpen,
  activeTemplateId,
  onSelectTemplate,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Lifestyle & Culture', 'Business & Intelligence', 'Creative & Gaming', 'Audio & Media', 'Education & Study', 'Marketing & Social', 'Content & SEO'];

  const filteredTemplates = OPAL_TEMPLATES.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-[#1e1f20] rounded-3xl shadow-2xl border border-[#e0e2ec] dark:border-[#444746] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#e0e2ec] dark:border-[#444746] flex items-center justify-between bg-[#f8fafd] dark:bg-[#131314]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#d3e3fd] dark:bg-[#041e49] text-[#0b57d0] dark:text-[#a8c7fa]">
              <Layers size={20} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#1f1f1f] dark:text-[#e3e3e3] flex items-center gap-2">
                Google Labs Mini-App Gallery
                <span className="text-[11px] font-normal bg-[#0b57d0]/10 text-[#0b57d0] dark:text-[#a8c7fa] px-2 py-0.5 rounded-full">
                  10 Official Templates
                </span>
              </h2>
              <p className="text-xs text-[#444746] dark:text-[#c4c7c5]">
                Pick an AI mini-app template to instantly inspect its node graph or run it live.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#e0e2ec] dark:hover:bg-[#282a2c] text-[#444746] dark:text-[#c4c7c5] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="px-6 py-3 border-b border-[#e0e2ec] dark:border-[#444746] bg-white dark:bg-[#1e1f20] space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#444746] dark:text-[#c4c7c5]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates (e.g. YouTube Learning, City Builder, Book Recs)..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-[#f0f4f9] dark:bg-[#282a2c] border border-transparent focus:border-[#0b57d0] dark:focus:border-[#a8c7fa] focus:bg-white dark:focus:bg-[#131314] text-[#1f1f1f] dark:text-[#e3e3e3] outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0b57d0] text-white'
                    : 'bg-[#f0f4f9] dark:bg-[#282a2c] text-[#444746] dark:text-[#c4c7c5] hover:bg-[#e0e2ec] dark:hover:bg-[#333538]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTemplates.map((template) => {
            const IconComponent = iconMap[template.iconName] || Sparkles;
            const isSelected = template.id === activeTemplateId;

            return (
              <div
                key={template.id}
                onClick={() => onSelectTemplate(template.id)}
                className={`group text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0b57d0] bg-[#f8fafd] dark:bg-[#202124] shadow-md ring-2 ring-[#0b57d0]/15'
                    : 'border-[#e0e2ec] dark:border-[#444746] bg-white dark:bg-[#1e1f20] hover:border-[#a8c7fa] hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#d3e3fd] dark:bg-[#041e49] text-[#0b57d0] dark:text-[#a8c7fa] group-hover:scale-105 transition-transform">
                        <IconComponent size={18} />
                      </div>
                      <span className="font-semibold text-sm text-[#1f1f1f] dark:text-[#e3e3e3]">
                        {template.title}
                      </span>
                    </div>
                    {template.badge && (
                      <span className="text-[10px] font-medium bg-[#f0f4f9] dark:bg-[#282a2c] text-[#0b57d0] dark:text-[#a8c7fa] px-2 py-0.5 rounded-full border border-[#e0e2ec] dark:border-[#444746]">
                        {template.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#444746] dark:text-[#c4c7c5] line-clamp-2 leading-relaxed">
                    {template.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e0e2ec] dark:border-[#444746] flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 font-mono">
                    {template.nodes.length} Nodes • {template.edges.length} Edges
                  </span>
                  <span className="text-[#0b57d0] dark:text-[#a8c7fa] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {isSelected ? 'Currently Loaded' : 'Load Template'}
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
