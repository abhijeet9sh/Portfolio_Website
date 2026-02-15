import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiLoader, FiTerminal, FiServer, FiCloud } from "react-icons/fi";

const deploymentSteps = [
    { id: 1, label: "Authenticating with AWS CLI...", icon: <FiTerminal />, duration: 800 },
    { id: 2, label: "Running 'npm run build'...", icon: <FiLoader />, duration: 2500 },
    { id: 3, label: "Optimizing assets & chunks...", icon: <FiServer />, duration: 1200 },
    { id: 4, label: "Terraform plan (Infrastructure as Code)...", icon: <FiCloud />, duration: 1500 },
    { id: 5, label: "Terraform apply -auto-approve...", icon: <FiCheckCircle />, duration: 2000 },
    { id: 6, label: "Syncing S3 Bucket (s3://portfolio-v2)...", icon: <FiServer />, duration: 1800 },
    { id: 7, label: "Invalidating CloudFront Distribution...", icon: <FiCloud />, duration: 1500 },
    { id: 8, label: "Verifying Health Checks...", icon: <FiCheckCircle />, duration: 1000 },
];

const DeploymentModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        if (!isOpen) {
            setLogs([]);
            setCurrentStep(0);
            setCompleted(false);
            return;
        }

        let stepIndex = 0;

        const processStep = () => {
            if (stepIndex >= deploymentSteps.length) {
                setCompleted(true);
                return;
            }

            const step = deploymentSteps[stepIndex];
            setLogs(prev => [...prev, { ...step, status: "running" }]);
            setCurrentStep(stepIndex);

            // Randomize duration slightly for realism
            const duration = step.duration + Math.random() * 500;

            setTimeout(() => {
                setLogs(prev =>
                    prev.map((log, i) => i === stepIndex ? { ...log, status: "success" } : log)
                );
                stepIndex++;
                processStep();
            }, duration);
        };

        processStep();

    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-2xl bg-[#0d1117] border border-white/10 rounded-xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className="bg-[#161b22] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="font-mono text-sm text-text/70">deploy-pipeline.yaml — bash</span>
                            </div>
                            <button onClick={onClose} className="text-text/50 hover:text-white transition-colors">
                                <FiX />
                            </button>
                        </div>

                        {/* Logs Content */}
                        <div className="p-6 overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar flex-1 bg-black/50">
                            {logs.map((log, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className={`shrink-0 ${log.status === 'running' ? 'animate-spin text-yellow-500' : 'text-green-500'}`}>
                                        {log.status === 'running' ? <FiLoader /> : <FiCheckCircle />}
                                    </span>
                                    <span className={log.status === 'running' ? 'text-gray-100' : 'text-gray-400'}>
                                        {log.label}
                                    </span>
                                    {log.status === 'success' && (
                                        <span className="text-xs text-gray-600 ml-auto hidden md:inline">
                                            {(log.duration / 1000).toFixed(1)}s
                                        </span>
                                    )}
                                </motion.div>
                            ))}

                            {completed && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded text-green-400 flex flex-col items-center justify-center gap-2 text-center"
                                >
                                    <FiCheckCircle className="text-3xl mb-2" />
                                    <h3 className="font-bold text-lg">Deployment Successful!</h3>
                                    <p className="text-sm opacity-80">The site has been successfully deployed to production.</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-4 px-6 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded transition-colors text-xs font-bold uppercase tracking-wider"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DeploymentModal;
