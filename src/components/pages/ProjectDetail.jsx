import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCpu, FiLayers, FiCheckCircle } from "react-icons/fi";
import { useEffect } from "react";

const ProjectDetail = () => {
    const { projectId } = useParams();

    // Find project in both job and sideHustle arrays
    const project =
        portfolioData.projects.job.find(p => p.id === projectId) ||
        portfolioData.projects.sideHustle.find(p => p.id === projectId);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-text flex-col gap-4">
                <h1 className="text-4xl font-mono text-primary">404: Case Study Not Found</h1>
                <Link to="/" className="text-secondary hover:underline flex items-center gap-2"><FiArrowLeft /> Return to Base</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <Link to="/" className="inline-flex items-center gap-2 text-text/60 hover:text-primary mb-6 transition-colors font-mono text-sm">
                    <FiArrowLeft /> Back to Projects
                </Link>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-text mb-4 uppercase tracking-tighter">
                    {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-text/60">
                    <span className="bg-surface px-3 py-1 rounded border border-white/5">{project.duration}</span>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            View Live <FiExternalLink />
                        </a>
                    )}
                </div>
            </motion.div>

            {/* Quick Stats / Tech Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                <div className="lg:col-span-2 space-y-12">
                    {/* Banner Image */}
                    {project.banner && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-surface/50 border border-white/10 rounded-xl overflow-hidden aspect-video relative group"
                        >
                            <img src={project.banner} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </motion.div>
                    )}

                    {/* Challenge & Solution */}
                    <div className="grid gap-8">
                        {project.challenge && (
                            <section className="bg-surface/30 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
                                <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-4 font-display uppercase"><FiCpu /> The Challenge</h2>
                                <p className="text-lg leading-relaxed text-text/90 font-sans">{project.challenge}</p>
                            </section>
                        )}
                        {project.solution && (
                            <section className="bg-surface/30 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
                                <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-4 font-display uppercase"><FiLayers /> The Solution</h2>
                                <p className="text-lg leading-relaxed text-text/90 font-sans">{project.solution}</p>
                            </section>
                        )}
                    </div>
                </div>

                {/* Sidebar: Architecture & Results */}
                <aside className="space-y-8">
                    {/* Tech Stack */}
                    <div className="bg-surface/50 p-6 rounded-xl border border-white/10">
                        <h3 className="text-sm font-mono text-text/50 uppercase mb-4 tracking-widest">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 text-xs font-mono text-primary rounded border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Architecture Steps */}
                    {project.architecture && (
                        <div className="bg-surface/50 p-6 rounded-xl border border-white/10">
                            <h3 className="text-sm font-mono text-text/50 uppercase mb-4 tracking-widest">Pipeline / Architecture</h3>
                            <ul className="space-y-3">
                                {project.architecture.map((step, i) => (
                                    <li key={i} className="flex gap-3 text-sm font-mono text-text/80">
                                        <span className="text-primary font-bold">0{i + 1}.</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Key Results */}
                    {project.result && (
                        <div className="bg-surface/50 p-6 rounded-xl border border-white/10">
                            <h3 className="text-sm font-mono text-text/50 uppercase mb-4 tracking-widest">Impact</h3>
                            <ul className="space-y-3">
                                {project.result.map((res, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-text/90 font-sans">
                                        <FiCheckCircle className="text-green-500 shrink-0 mt-1" />
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </article>
    );
};

export default ProjectDetail;
