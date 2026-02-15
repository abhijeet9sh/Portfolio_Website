import { FiPlay } from "react-icons/fi";

const Footer = ({ onDeploy }) => {
    return (
        <footer className="py-8 border-t border-black/5 bg-black/5 mt-20">
            <div className="container mx-auto px-4 text-center text-text/50 text-sm">
                <p>© {new Date().getFullYear()} Abhijeet Priyankar. All rights reserved.</p>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={onDeploy}
                        className="flex items-center gap-2 text-xs font-mono text-primary/80 hover:text-primary border border-primary/20 hover:border-primary/50 px-3 py-1 rounded bg-primary/5 transition-all"
                    >
                        <FiPlay /> START DEPLOYMENT SIMULATION
                    </button>
                </div>
                <p className="mt-2">Built with React, TailwindCSS & Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
