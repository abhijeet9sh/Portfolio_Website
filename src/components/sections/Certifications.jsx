import { useState } from "react";
import BentoCard from "../ui/BentoCard";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
    const [failedLogos, setFailedLogos] = useState(new Set());

    const handleLogoError = (index) => {
        setFailedLogos(prev => new Set(prev).add(index));
    };

    const getInitials = (issuer) => {
        return issuer.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
    };

    const getColorFromIssuer = (issuer) => {
        const colors = {
            'Oracle': 'bg-red-500',
            'Microsoft': 'bg-blue-500',
            'upGrad': 'bg-orange-500',
            'Zoho': 'bg-yellow-600'
        };
        return colors[issuer] || 'bg-primary';
    };

    return (
        <SectionWrapper id="certifications">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Licenses & <span className="text-primary">Certifications</span></h2>
                <p className="text-text/60">Professional certifications and credentials.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.certifications.map((cert, index) => (
                    <BentoCard key={index} className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-3">
                            <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
                                {cert.logo && !failedLogos.has(index) ? (
                                    <img
                                        src={cert.logo.startsWith('http') ? cert.logo : `${import.meta.env.BASE_URL}${cert.logo.replace(/^\//, '')}`}
                                        alt={`${cert.issuer} logo`}
                                        className="w-full h-full object-contain"
                                        onError={() => handleLogoError(index)}
                                    />
                                ) : (
                                    <div className={`w-full h-full ${getColorFromIssuer(cert.issuer)} rounded flex items-center justify-center text-white font-bold text-sm`}>
                                        {getInitials(cert.issuer)}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-base leading-tight mb-2">{cert.name}</h3>
                                <p className="text-sm text-text/70 mb-1">{cert.issuer}</p>
                                <p className="text-xs text-primary font-mono">
                                    {cert.date}
                                    {cert.expiryDate && ` • Expires ${cert.expiryDate}`}
                                </p>
                            </div>
                        </div>

                        {cert.credentialId && (
                            <p className="text-xs text-text/50 mb-3 font-mono">
                                ID: {cert.credentialId}
                            </p>
                        )}

                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:underline text-sm mt-auto"
                            >
                                Show credential <FaExternalLinkAlt size={10} />
                            </a>
                        )}
                    </BentoCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
