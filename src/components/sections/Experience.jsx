import BentoCard from "../ui/BentoCard";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">My <span className="text-primary">Journey</span></h2>
                <p className="text-text/60">Professional experience and key contributions.</p>
            </div>

            <div className="space-y-6">
                {portfolioData.experience.map((job, index) => (
                    <BentoCard key={index} className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                            <h3 className="text-xl font-bold text-white">{job.company}</h3>
                            <p className="text-sm text-primary font-mono mt-1">{job.period}</p>
                        </div>
                        <div className="md:w-3/4">
                            <h4 className="text-lg font-semibold text-text mb-3">{job.role}</h4>
                            <ul className="list-disc list-inside space-y-2 text-text/70">
                                {job.achievements.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
