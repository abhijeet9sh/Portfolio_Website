import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("job");

    return (
        <SectionWrapper id="projects" className="py-20">
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-center mb-10 text-text tracking-tight">
                FEATURED <span className="text-primary font-pixel">PROJECTS</span>
            </h2>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mb-12">
                {[
                    { id: "job", label: "WORK" },
                    { id: "sideHustle", label: "SIDE HUSTLES" }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-6 py-2 rounded-full font-tech font-bold tracking-wider text-sm transition-all duration-300
                            ${activeTab === tab.id
                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                : "bg-white/50 border border-black/10 text-text/60 hover:bg-white hover:text-primary"}
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Feature Grid - Simplified for better readability on light theme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="wait">
                    {portfolioData.projects[activeTab]?.map((project, index) => (
                        <BentoCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            date={project.duration}
                            tags={project.tags}
                            link={project.link}
                            delay={index * 0.1}
                            className="bg-white/40 border border-black/10 hover:border-primary/100 hover:shadow-xl transition-all duration-300 min-h-[300px]"
                        >
                            <div className="flex-1 flex flex-col justify-between h-full z-10 relative">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-tech font-bold text-text group-hover:text-primary transition-colors pr-4">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                            {project.duration}
                                        </span>
                                    </div>
                                    <p className="text-text/70 mb-6 font-sans text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 4).map((tag, i) => (
                                        <Badge key={i} variant="outline" className="text-xs border-black/20 text-text/80 bg-white/50">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
