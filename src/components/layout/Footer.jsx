const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-surface/30 mt-20">
            <div className="container mx-auto px-4 text-center text-text/50 text-sm">
                <p>© {new Date().getFullYear()} Abhijeet Priyankar. All rights reserved.</p>
                <p className="mt-2">Built with React, TailwindCSS & Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
