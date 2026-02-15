import BentoCard from "../ui/BentoCard";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";

const About = () => {
    return (
        <SectionWrapper id="about" className="">
            <BentoCard className="border-l-4 border-l-primary">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-primary">01.</span> About Me
                </h2>
                <p className="text-text/80 leading-relaxed text-base mb-6">
                    {portfolioData.personal.summary}
                </p>

                {portfolioData.jobPreferences && (
                    <div className="bg-surface/5 p-6 rounded-lg border border-black/10 mt-6">
                        <h3 className="text-lg font-bold text-text mb-4">Open to Work</h3>
                        <div className="grid grid-cols-3 gap-8 text-sm text-text/70">
                            <div>
                                <span className="block text-primary text-xs mb-1 font-semibold">Roles</span>
                                <span className="text-text/80">{portfolioData.jobPreferences.roles.join(", ")}</span>
                            </div>
                            <div>
                                <span className="block text-primary text-xs mb-1 font-semibold">Locations</span>
                                <span className="text-text/80">{portfolioData.jobPreferences.locations.join(", ")}</span>
                            </div>
                            <div>
                                <span className="block text-primary text-xs mb-1 font-semibold">Availability</span>
                                <span className="text-text/80">{portfolioData.jobPreferences.noticePeriod}</span>
                            </div>
                        </div>
                    </div>
                )}
            </BentoCard>
        </SectionWrapper>
    );
};

export default About;
