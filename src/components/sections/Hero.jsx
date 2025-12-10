import { motion } from "framer-motion";
import BentoCard from "../ui/BentoCard";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";
import SectionWrapper from "../layout/SectionWrapper";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <SectionWrapper id="hero" className="pt-32 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">
                {/* Profile Image - Spans 2 rows */}
                <BentoCard colSpan={1} rowSpan={2} className="!p-2 overflow-hidden relative group !rounded-xl">
                    <div className="absolute inset-2 w-auto h-auto">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/profile-pic.png`}
                            alt={personal.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                            style={{ objectPosition: 'center 45%' }}
                        />
                    </div>
                    <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 z-10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-primary">Open to Work</span>
                        </div>
                    </div>
                </BentoCard>

                {/* Intro Text - Spans 2 cols */}
                <BentoCard colSpan={2} rowSpan={1} className="justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">
                            Hi, I'm <span className="text-primary">Abhijeet</span>
                        </h1>
                        <p className="text-text/60 text-lg md:text-xl">
                            {personal.title}
                        </p>
                    </motion.div>
                </BentoCard>


                {/* Stats Showcase */}
                <BentoCard colSpan={1} rowSpan={1} className="bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="flex flex-col justify-center h-full gap-2">
                        <div>
                            <p className="text-3xl font-bold text-primary">3+</p>
                            <p className="text-xs text-text/60">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">60%</p>
                            <p className="text-xs text-text/60">Cost Reduction</p>
                        </div>
                    </div>
                </BentoCard>


                {/* Action Area - Spans 2 cols */}
                <BentoCard colSpan={2} rowSpan={1} className="justify-center bg-gradient-to-r from-surface to-surface/50">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="max-w-md">
                            <p className="text-text/80 mb-4">
                                Automating cloud infrastructure and optimizing CI/CD pipelines for scalability.
                            </p>
                            <div className="flex gap-4">
                                <Button href="/assets/documents/Resume_Main.pdf" download variant="primary">
                                    <FaDownload size={14} /> Resume
                                </Button>
                                <Button href="#contact" variant="outline">
                                    <FaEnvelope size={14} /> Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                {/* Tech Stack Marquee (Static for now) */}
                <BentoCard colSpan={1} rowSpan={1} title="Stack" className="bg-primary/5 border-primary/20">
                    <div className="flex flex-wrap gap-2 content-start">
                        {["Azure", "K8s", "Docker", "Terraform", "ArgoCD", "Python"].map(tech => (
                            <span key={tech} className="text-xs bg-black/20 px-2 py-1 rounded text-primary font-mono border border-primary/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </BentoCard>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
