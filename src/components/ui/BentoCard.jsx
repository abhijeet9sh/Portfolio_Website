import { motion } from "framer-motion";

const BentoCard = ({ children, className = "", title, colSpan = 1, rowSpan = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`
        bg-surface rounded-xl p-6 border border-white/5 
        hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 
        transition-all duration-300 flex flex-col relative overflow-hidden
        ${className}
      `}
            style={{
                gridColumn: `span ${colSpan} / span ${colSpan}`,
                gridRow: `span ${rowSpan} / span ${rowSpan}`,
            }}
        >
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {title && (
                <h3 className="text-xl font-bold mb-4 text-text/90">{title}</h3>
            )}
            <div className="relative z-10 flex-1 flex flex-col">
                {children}
            </div>
        </motion.div>
    );
};

export default BentoCard;
