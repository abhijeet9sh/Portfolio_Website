const Badge = ({ children, variant = "default" }) => {
    const variants = {
        default: "bg-white/5 text-text/80 border border-white/10",
        primary: "bg-primary/10 text-primary border border-primary/20",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${variants[variant]}`}>
            {children}
        </span>
    );
};

export default Badge;
