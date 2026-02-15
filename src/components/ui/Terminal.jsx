import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to AbhiShell v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const { personal, skills, social } = portfolioData;

    // Auto-scroll to bottom
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    // Focus input when clicking anywhere in terminal
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: cmd }];

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-1">
                            <p>Available commands:</p>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="text-white">whoami</span><span>- About Abhijeet</span>
                                <span className="text-white">skills</span><span>- Technical Stack</span>
                                <span className="text-white">contact</span><span>- Contact Info</span>
                                <span className="text-white">clear</span><span>- Clear screen</span>
                                <span className="text-white">exit</span><span>- Close terminal</span>
                            </div>
                        </div>
                    )
                });
                break;
            case 'whoami':
                newHistory.push({
                    type: 'output',
                    content: `User: Abhijeet Priyankar\nRole: ${personal.title}\nLocation: ${personal.location}\nBio: ${personal.summary}`
                });
                break;
            case 'skills':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div>
                            <p> proficient_stack:</p>
                            <div className="flex flex-col gap-2 mt-1">
                                {skills.map(category => (
                                    <div key={category.category}>
                                        <span className="text-white/60 text-xs">{category.category}: </span>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map(s => (
                                                <span key={s} className="bg-white/10 px-1 rounded text-[#FFA54D]">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                });
                break;
            case 'contact':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="flex flex-col gap-1">
                            <p>Email: {personal.email}</p>
                            <div className="flex gap-2">
                                {social.map(s => (
                                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                                        {s.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                });
                break;
            case 'clear':
                setHistory([]);
                return; // Special case, don't use newHistory
            case 'exit':
                setIsOpen(false);
                break;
            case '':
                break;
            default:
                newHistory.push({
                    type: 'output',
                    content: `Command not found: ${trimmedCmd}. Type "help" for assistance.`
                });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#1A1A1A] text-[#FFA54D] border-2 border-[#FFA54D] shadow-lg hover:scale-110 transition-transform"
                whileHover={{ rotate: 15 }}
                title="Open Terminal"
            >
                {isOpen ? <FaTimes size={20} /> : <FaTerminal size={20} />}
            </motion.button>

            {/* Terminal Drawer/Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-[90vw] md:w-[600px] h-[400px] bg-[#1A1A1A]/95 backdrop-blur-md rounded-lg border-2 border-[#FFA54D] z-50 overflow-hidden shadow-2xl flex flex-col font-tech text-[#FFA54D] text-sm md:text-base"
                    >
                        {/* Header */}
                        <div className="bg-[#FFA54D]/10 p-2 border-b border-[#FFA54D]/20 flex justify-between items-center select-none">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs opacity-70">abhi@portfolio:~</span>
                            </div>
                            <div className="text-xs opacity-50">bash</div>
                        </div>

                        {/* Content Area */}
                        <div
                            className="flex-1 p-4 overflow-y-auto font-mono scrollbar-thin scrollbar-thumb-[#FFA54D] scrollbar-track-transparent"
                            onClick={handleTerminalClick}
                        >
                            {history.map((item, index) => (
                                <div key={index} className="mb-2">
                                    {item.type === 'input' ? (
                                        <div className="flex items-center gap-2 opacity-80">
                                            <FaChevronRight size={10} />
                                            <span>{item.content}</span>
                                        </div>
                                    ) : (
                                        <div className="whitespace-pre-wrap ml-4 opacity-90">{item.content}</div>
                                    )}
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-blue-400">~</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent border-none outline-none text-[#FFA54D] flex-1 caret-[#FFA54D]"
                                    autoFocus
                                    spellCheck="false"
                                    autoComplete="off"
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
