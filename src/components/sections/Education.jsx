import BentoCard from "../ui/BentoCard";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <SectionWrapper id="education">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Academic <span className="text-primary">Background</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.education.map((edu, index) => (
                    <BentoCard key={index} className="relative overflow-hidden group">
                        <div className="bg-primary/5 p-3 w-fit rounded-full mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                            <FaGraduationCap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-primary font-mono text-sm mb-2">{edu.institution}</p>
                        <div className="flex justify-between items-center text-text/60 text-sm mt-auto">
                            <span>{edu.period}</span>
                        </div>
                        <p className="text-text/70 text-sm mt-3 border-t border-white/5 pt-3">
                            {edu.description}
                        </p>
                    </BentoCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
