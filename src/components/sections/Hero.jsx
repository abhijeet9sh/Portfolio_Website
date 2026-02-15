import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { portfolioData } from "../../data/portfolio";

const Hero = () => {
    const { personal } = portfolioData;

    // Animation Variants (Ryan Sullivan Style: Slide Up + Fade)
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="min-h-screen pt-32 md:pt-40 pb-12 md:pb-20 flex flex-col justify-center px-4 md:px-12 max-w-[1600px] mx-auto overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Typography */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start text-left z-10"
                >
                    {/* Role / Availability Badge */}
                    <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-tech text-text/60 text-sm tracking-widest uppercase">
                            AVAILABLE FOR HIRE
                        </span>
                    </motion.div>

                    {/* Main Headline - PIXEL FONT */}
                    <div className="relative mb-6">
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl lg:text-9xl font-display font-normal text-text leading-[0.9] tracking-tight">
                            DEVOPS
                        </motion.h1>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl lg:text-9xl font-display font-normal text-text/30 leading-[0.9] tracking-tight">
                            ENGINEER
                        </motion.h1>
                    </div>

                    {/* Subtitle / Tech Spec */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-2 mb-10 max-w-lg">
                        <p className="font-tech text-lg md:text-xl text-text/80 leading-relaxed">
                            <span className="text-primary font-bold">SITE RELIABILITY ENGINEER</span> & CLOUD ARCHITECT.
                        </p>
                        <p className="font-sans text-text/60 text-sm md:text-base">
                            Building resilient infrastructure and automating complex workflows. based in {personal.location}.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Button href={`${import.meta.env.BASE_URL}assets/documents/Resume_Main.pdf`} download variant="primary" className="rounded-none border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                            <FaDownload className="mr-2" /> DOWNLOAD CV
                        </Button>
                        <div className="flex gap-2">
                            <a href="https://github.com/abhijeet9sh" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black/10 hover:border-black hover:bg-black hover:text-white transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black/10 hover:border-black hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>


                {/* Right Column: Halftone Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: 'grayscale(100%) blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%) blur(0px)' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-xl mx-auto"
                >
                    {/* Image Container with "Halftone" CSS Mask/Filter */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-black/5">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/profile-dithered.png`}
                            alt="Abhijeet Priyankar"
                            className="w-full h-full object-cover object-[center_35%] scale-[1.1] transition-all duration-500"
                            style={{
                                mixBlendMode: 'multiply' // Blends the paper texture with the background
                            }}
                        />
                        {/* Overlay Gradient for Fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#E7E8D3] via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
