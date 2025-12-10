import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["About", "Skills", "Experience", "Education", "Projects", "Certifications"];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl font-bold font-mono text-text">
                    abhijeet<span className="text-primary">.dev</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-text/70 hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/abhijeet9sh" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <Button variant="primary" className="hidden md:flex text-sm py-1.5 px-4" href="#contact">
                        Let's Talk
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-text/70 hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-md border-t border-white/5"
                    >
                        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-text/70 hover:text-primary transition-colors py-2"
                                >
                                    {item}
                                </a>
                            ))}
                            <Button variant="primary" className="mt-2" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Let's Talk
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
