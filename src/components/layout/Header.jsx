import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCode, FaEnvelope, FaBriefcase } from "react-icons/fa";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "WORK", href: "#projects" },
        { name: "ABOUT", href: "#about" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-12 md:py-10 max-w-[1600px] mx-auto"
        >
            {/* Logo / Name */}
            <a href="#" className="text-2xl md:text-3xl font-pixel font-bold text-text tracking-tight hover:opacity-70 transition-opacity">
                Abhijeet Priyankar
            </a>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-black/5 text-xs font-tech font-bold text-text tracking-widest hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                    >
                        {item.name}
                    </a>
                ))}
                <a
                    href={`${import.meta.env.BASE_URL}assets/documents/Resume_Main.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-6 py-3 rounded-full border border-primary/30 text-primary text-xs font-tech font-bold tracking-widest hover:bg-primary hover:text-white transition-colors"
                >
                    RESUME
                </a>
                <a
                    href="mailto:abhijeet9.sh@gmail.com"
                    className="ml-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-tech font-bold tracking-widest hover:bg-black transition-colors"
                >
                    HIRE ME
                </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="w-8 h-0.5 bg-text block transition-transform"
                />
                <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-8 h-0.5 bg-text block transition-opacity"
                />
                <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="w-8 h-0.5 bg-text block transition-transform"
                />
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y < -100) setMobileMenuOpen(false);
                        }}
                        className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-xl border-b border-black/5 p-8 flex flex-col gap-4 shadow-2xl md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-tech font-bold text-text hover:text-primary transition-colors py-2 border-b border-black/5"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href={`${import.meta.env.BASE_URL}assets/documents/Resume_Main.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full py-4 text-center rounded-full border border-primary/30 text-primary text-sm font-tech font-bold tracking-widest hover:bg-primary hover:text-white transition-colors"
                        >
                            RESUME
                        </a>
                        <a
                            href="mailto:abhijeet9.sh@gmail.com"
                            className="w-full py-4 text-center rounded-full bg-primary text-white text-sm font-tech font-bold tracking-widest"
                        >
                            HIRE ME
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
