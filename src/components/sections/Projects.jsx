import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("job");

    return (
        <SectionWrapper id="projects">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-text/60">DevOps case studies and automation solutions.</p>
                </div>

                {/* Tab Switcher */}
                <div className="flex bg-surface/50 p-1 rounded-lg border border-white/5">
                    <button
                        onClick={() => setActiveTab("job")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "job" ? "bg-primary text-black shadow-lg" : "text-text/70 hover:text-white"
                            }`}
                    >
                        At Job
                    </button>
                    <button
                        onClick={() => setActiveTab("sideHustle")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "sideHustle" ? "bg-primary text-black shadow-lg" : "text-text/70 hover:text-white"
                            }`}
                    >
                        Side Hustle
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                    {portfolioData.projects[activeTab]?.map((project, index) => (
                        <BentoCard
                            key={`${activeTab}-${index}`}
                            className="group flex flex-col"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                {project.duration && (
                                    <p className="text-xs text-primary mb-3 font-mono">{project.duration}</p>
                                )}
                                <p className="text-text/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="default">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline mt-auto">
                                View Project <FaExternalLinkAlt size={12} />
                            </a>
                        </BentoCard>
                    ))}
                </AnimatePresence>

                {portfolioData.projects[activeTab]?.length === 0 && (
                    <div className="col-span-full text-center py-10 text-text/50 italic">
                        No projects added in this category yet.
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
