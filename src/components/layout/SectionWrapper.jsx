const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
