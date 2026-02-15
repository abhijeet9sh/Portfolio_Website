import { useState } from "react";
import emailjs from "@emailjs/browser";
import BentoCard from "../ui/BentoCard";
import Button from "../ui/Button";
import SectionWrapper from "../layout/SectionWrapper";
import { portfolioData } from "../../data/portfolio";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        // Service ID, Template ID, and Public Key from EmailJS
        // ideally these should be in .env files:
        // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
        const serviceId = "service_id_placeholder";
        const templateId = "template_id_placeholder";
        const publicKey = "public_key_placeholder";

        try {
            // Check if EmailJS is actually configured, else fallback to mailto
            if (serviceId === "service_id_placeholder") {
                throw new Error("EmailJS not configured");
            }

            await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: portfolioData.personal.name,
            }, publicKey);

            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(""), 5000);
        } catch (error) {
            console.warn("EmailJS Error (likely missing keys):", error);
            // Fallback to email link
            const mailtoLink = `mailto:${portfolioData.personal.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
            window.location.href = mailtoLink;
            setStatus("");
        }
    };

    return (
        <SectionWrapper id="contact" className="py-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Form */}
                <BentoCard className="bg-gradient-to-br from-primary/10 to-transparent p-8">
                    <h2 className="text-3xl font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
                    <p className="text-text/70 mb-6">
                        Have a project in mind or want to discuss DevOps opportunities? Drop me a message!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-black/10 rounded-lg text-text placeholder-text/40 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-black/10 rounded-lg text-text placeholder-text/40 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-white/50 border border-black/10 rounded-lg text-text placeholder-text/40 focus:border-primary focus:outline-none transition-colors resize-none"
                            />
                        </div>
                        <Button
                            variant="primary"
                            className="w-full justify-center"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Sending..." : (
                                <>
                                    <FaPaperPlane size={16} /> Send Message
                                </>
                            )}
                        </Button>
                        {status === "sent" && (
                            <p className="text-primary text-sm text-center">Message sent! I'll get back to you soon.</p>
                        )}
                    </form>
                </BentoCard>

                {/* Contact Info */}
                <BentoCard className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-text/60 text-sm">Email</p>
                                <a href={`mailto:${portfolioData.personal.email}`} className="text-text hover:text-primary transition-colors">
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaLinkedin size={20} />
                            </div>
                            <div>
                                <p className="text-text/60 text-sm">LinkedIn</p>
                                <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <FaGithub size={20} />
                            </div>
                            <div>
                                <p className="text-text/60 text-sm">GitHub</p>
                                <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                                    @abhijeet9sh
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-white/30 rounded-lg border border-black/5">
                        <p className="text-text/60 text-sm mb-2">Currently open to:</p>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.jobPreferences.roles.map((role) => (
                                <span key={role} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                                    {role}
                                </span>
                            ))}
                        </div>
                        <p className="text-text/50 text-xs mt-3">Notice Period: {portfolioData.jobPreferences.noticePeriod}</p>
                    </div>
                </BentoCard>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
