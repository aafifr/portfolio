import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  BookOpen, 
  Search, 
  LayoutGrid, 
  List, 
  X, 
  ExternalLink
} from 'lucide-react';
import { GitHubLogo } from './BrandLogos';
import { projects, getProjectCardTheme } from '../data/portfolioData';
import { DeviceMockup } from './DeviceMockup';

interface AllProjectsPageProps {
  onBackToHome: () => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onBackToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Categories list extracted dynamically from data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  // Friendly category labels for pills
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'All': return 'All Projects';
      case 'CREATOR BIO-LINK SAAS': return 'Creator SaaS';
      case 'POINT-OF-SALE (POS) SAAS': return 'POS SaaS';
      case 'MULTI-TENANT BOOKING SAAS': return 'Booking SaaS';
      case 'AI & RECRUITMENT AUTOMATION': return 'AI Automation';
      case 'B2B ENTERPRISE PORTAL': return 'B2B Enterprise';
      case 'INSTITUTIONAL MANAGEMENT SYSTEM': return 'Management';
      default: return cat;
    }
  };

  // Filtered projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        (project.year && project.year.includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Ensure scroll position resets to top on initial page mount (especially on mobile)
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-[105px] sm:pt-[140px] pb-[100px] sm:pb-[130px] px-5 sm:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Top Back Navigation Bar */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium text-[#64748B] hover:text-[#111111] transition-colors py-2 px-3 -ml-3 rounded-full hover:bg-neutral-100/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Title Section */}
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (04) PROJECT ARCHIVE
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.08] font-sans max-w-[800px]">
            All Projects & Experiments.
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#52525B] font-normal font-sans leading-[1.65] max-w-[620px] mt-4">
            A comprehensive archive of production web applications, SaaS platforms, client digital solutions, and developer tooling I’ve designed and shipped.
          </p>
        </div>

        {/* Controls Bar: Search, Category Filters, and View Toggle */}
        <div className="space-y-6 pb-8 border-b border-[#E5E7EB] mb-12">
          
          {/* Row 1: Search Input & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, tech (e.g. React, Laravel), keyword..."
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-[#FAFAFA] border border-[#E5E7EB] hover:border-neutral-300 focus:border-[#111111] focus:bg-white text-[13.5px] text-[#111111] placeholder:text-[#94A3B8] transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700 rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right: Results Count & Grid/Table Toggle */}
            <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
              <span className="text-[13px] font-mono text-[#8E95A2]">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
              </span>

              {/* View Switcher Pill */}
              <div className="flex items-center bg-[#F4F4F5] p-1 rounded-full border border-[#E4E4E7]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#111111] shadow-xs'
                      : 'text-[#71717A] hover:text-[#111111]'
                  }`}
                  title="Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cards</span>
                </button>

                <button
                  onClick={() => setViewMode('table')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-[#111111] shadow-xs'
                      : 'text-[#71717A] hover:text-[#111111]'
                  }`}
                  title="Table Archive View"
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Category Filter Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-medium transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-[#F8F9FA] hover:bg-[#F1F3F5] text-[#52525B] border border-[#E5E7EB]'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section: Grid View vs Table View */}
        {filteredProjects.length === 0 ? (
          /* Empty Search State */
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#F4F4F5] flex items-center justify-center text-[#71717A] mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-[#111111] mb-1">No projects match your search</h3>
            <p className="text-[14px] text-[#71717A] max-w-sm mb-6">
              Try adjusting your search terms or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-full bg-[#111111] text-white text-[13px] font-medium hover:bg-[#2563EB] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Cards */
          <div className="space-y-16 sm:space-y-20">
            {filteredProjects.map((project, idx) => {
              const theme = getProjectCardTheme(project.id);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:h-[420px] justify-between gap-8 lg:gap-[72px]"
                >
                  {/* Left Column: Device Mockup Container with Dynamic Tinted Background */}
                  <div className={`relative w-full lg:w-[560px] h-[340px] sm:h-[400px] lg:h-[420px] rounded-3xl ${theme.bg} border ${theme.border} overflow-hidden flex items-center justify-center p-4 sm:p-6 shrink-0 group transition-all duration-500 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)]`}>
                    {/* Soft Ambient Flare */}
                    <div className={`absolute -inset-10 bg-gradient-to-tr ${theme.glow} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500 z-10">
                      <DeviceMockup
                        type={project.mockupType}
                        image={project.image}
                        mobileImage={project.mobileImage}
                        url={project.liveUrl}
                      />
                    </div>
                  </div>

                {/* Right Column: Project Information */}
                <div className="w-full lg:w-[568px] my-auto flex flex-col justify-center space-y-4">
                  {/* Category & Year Tag */}
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[#8E95A2] font-semibold">
                      {project.category}
                    </span>
                    {project.year && (
                      <>
                        <span className="text-[#CBD5E1] text-xs">•</span>
                        <span className="font-mono text-[11.5px] text-[#8E95A2]">
                          {project.year}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-[32px] lg:text-[36px] font-medium tracking-[-0.03em] text-[#111111] leading-tight font-sans">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#52525B] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal font-sans max-w-[500px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Line */}
                  <div className="text-[12.5px] font-mono text-[#8E95A2] tracking-wide pt-0.5">
                    {project.tags.join(' · ')}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#111111] hover:bg-[#2563EB] text-white text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
                    >
                      <span>{project.primaryButtonText || "Visit Live"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    {project.storyUrl && (
                      <a
                        href={project.storyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAFAFA] text-[#111111] border border-[#E5E7EB] hover:border-neutral-300 text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
                      >
                        <span>{project.secondaryButtonText || "Read the Story"}</span>
                        <BookOpen className="w-3.5 h-3.5 text-[#64748B]" />
                      </a>
                    )}

                    {project.githubUrl && !project.storyUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAFAFA] text-[#111111] border border-[#E5E7EB] hover:border-neutral-300 text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
                      >
                        <span>Source Code</span>
                        <GitHubLogo className="w-3.5 h-3.5 fill-current text-[#64748B]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        ) : (
          /* Table / Compact Archive View */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[12px] font-mono uppercase tracking-[0.14em] text-[#8E95A2]">
                  <th className="py-4 pr-6 font-medium">Year</th>
                  <th className="py-4 pr-8 font-medium">Project</th>
                  <th className="py-4 pr-8 font-medium hidden md:table-cell">Category</th>
                  <th className="py-4 pr-8 font-medium hidden lg:table-cell">Built With</th>
                  <th className="py-4 text-right font-medium">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {filteredProjects.map((project, idx) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="group hover:bg-[#FAFAFA] transition-colors"
                  >
                    {/* Year */}
                    <td className="py-4.5 pr-6 font-mono text-[13px] text-[#8E95A2] whitespace-nowrap">
                      {project.year || '2025'}
                    </td>

                    {/* Project Title */}
                    <td className="py-4.5 pr-8">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[15.5px] text-[#111111] group-hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#2563EB]" />
                      </a>
                      <div className="md:hidden text-[12px] text-[#8E95A2] mt-0.5">
                        {project.category}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4.5 pr-8 text-[13.5px] text-[#64748B] hidden md:table-cell">
                      {getCategoryLabel(project.category)}
                    </td>

                    {/* Built With (Tags) */}
                    <td className="py-4.5 pr-8 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md text-[11.5px] font-mono text-[#52525B] bg-[#F4F4F5]"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[11px] font-mono text-[#94A3B8] self-center">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* External Link Action */}
                    <td className="py-4.5 text-right whitespace-nowrap">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#64748B] group-hover:text-[#111111] hover:underline underline-offset-4"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Return to Home Navigation Bar */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#E5E7EB] flex items-center justify-start">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors py-2.5 sm:py-2 px-5 rounded-full bg-[#FAFAFA] hover:bg-[#F4F4F5] border border-[#E5E7EB] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
