import { motion } from "framer-motion";
import Button from "../ui/Button";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
            {/* Glitch Effect Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-20 mix-blend-overlay"></div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-9xl font-display font-bold text-primary mb-4 glitch-text"
                data-text="404"
            >
                404
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-4xl font-tech text-white mb-8"
            >
                SYSTEM ERROR: PAGE_NOT_FOUND
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-text/60 max-w-md mb-10 font-mono"
            >
                The requested resource could not be located in the current sector.
                Please return to the safe zone immediately.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Button href="/" variant="primary">
                    RETURN HOME
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFound;
