import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DevOpsTicker = () => {
    // Fake "Live" Stats
    const [latency, setLatency] = useState(24);
    const [uptime, setUptime] = useState("99.999%");

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomize Latency slightly
            setLatency(Math.floor(Math.random() * (45 - 15 + 1) + 15));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const logs = [
        "[INFO] K8s Cluster 'production-us-east' scaled up to 50 nodes",
        "[SUCCESS] CI/CD Pipeline #8492 completed in 45s",
        "[INFO] Terraform apply successful: 12 resources added",
        "[WARN] Memory usage at 78% on worker-node-03",
        "[INFO] Grafana dashboard updated: 'Microservices Latency'",
        "[SECURITY] Vulnerability scan completed: 0 high risks found",
        "[INFO] New commit pushed to main: 'fix: optimize docker build'",
        "[SYSTEM] All systems operational. 0 incidents active.",
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full h-8 bg-black/90 backdrop-blur-md border-t border-primary/20 flex items-center z-40 overflow-hidden font-mono text-xs">
            {/* Status Indicator (Left) */}
            <div className="flex items-center px-4 bg-primary/10 h-full border-r border-primary/20 shrink-0 gap-3 z-10">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-bold hidden sm:inline">OPERATIONAL</span>
                </div>
                <div className="text-primary/80 hidden md:flex items-center gap-3">
                    <span>LATENCY: {latency}ms</span>
                    <span>UPTIME: {uptime}</span>
                </div>
            </div>

            {/* Scrolling Marquee (Right) */}
            <div className="flex-1 overflow-hidden relative flex items-center">
                <motion.div
                    className="flex whitespace-nowrap gap-12 text-text/60"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {[...logs, ...logs].map((log, index) => (
                        <span key={index} className="flex items-center gap-2">
                            <span className="opacity-50 text-[10px]">{new Date().toLocaleTimeString()}</span>
                            {log}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default DevOpsTicker;
