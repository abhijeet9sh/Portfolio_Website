import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Technical <span className="text-primary">Arsenal</span></h2>
                <p className="text-text/60">Tools and technologies I use to build scalable infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.skills.map((skillGroup, index) => (
                    <BentoCard key={index} title={skillGroup.category} className="h-full">
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skillGroup.items.map((skill) => (
                                <Badge key={skill} variant="primary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
