import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", href, className = "", download }) => {
    const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-black hover:bg-opacity-90 shadow-lg shadow-primary/20",
        outline: "border border-primary/20 text-primary hover:bg-primary/5",
        ghost: "text-text/70 hover:text-primary hover:bg-white/5",
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, download, target: href.startsWith("http") ? "_blank" : undefined } : { onClick };

    return (
        <Component
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
