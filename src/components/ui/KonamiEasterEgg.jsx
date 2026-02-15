import { useEffect, useState } from 'react';

const KonamiEasterEgg = () => {
    const [input, setInput] = useState([]);
    const konamiCode = [
        "ArrowUp", "ArrowUp",
        "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight",
        "ArrowLeft", "ArrowRight",
        "b", "a"
    ];

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Add new key to input array
            const newInput = [...input, e.key];

            // Keep only the last N keys (length of konami code)
            if (newInput.length > konamiCode.length) {
                newInput.shift();
            }

            setInput(newInput);

            // Check if input matches the code
            if (JSON.stringify(newInput) === JSON.stringify(konamiCode)) {
                // Toggle God Mode
                const html = document.documentElement;
                if (html.getAttribute('data-theme') === 'god-mode') {
                    html.removeAttribute('data-theme');
                    html.style.removeProperty('--color-background');
                    html.style.removeProperty('--color-text');
                    html.style.removeProperty('--color-primary');
                    console.log("God Mode Deactivated");
                } else {
                    html.setAttribute('data-theme', 'god-mode');
                    // Force overrides via inline CSS variables to ensure immediate effect
                    html.style.setProperty('--color-background', '#050505');
                    html.style.setProperty('--color-text', '#00FF41');
                    html.style.setProperty('--color-primary', '#D300C5');
                    console.log("God Mode Activated");
                }

                // Reset input to allow re-entry
                setInput([]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [input]);

    return null; // Logic only, no visible UI component
};

export default KonamiEasterEgg;
