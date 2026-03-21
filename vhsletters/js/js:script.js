document.addEventListener('DOMContentLoaded', () => {
    // Neon glitch flicker every 8 seconds
    setInterval(() => {
        const neons = document.querySelectorAll('.neon-cyan, .neon-yellow');
        neons.forEach(el => {
            el.classList.add('glitch');
            setTimeout(() => el.classList.remove('glitch'), 600);
        });
    }, 8000);

    // Floating VHS tapes in background
    const body = document.body;
    for (let i = 0; i < 6; i++) {
        const tape = document.createElement('div');
        tape.textContent = '📼';
        tape.style.cssText = `
            position: fixed; font-size: 3rem; opacity: 0.1; z-index: -1;
            left: ${Math.random() * 100}vw; top: ${Math.random() * 100}vh;
            animation: float ${15 + Math.random() * 20}s linear infinite;
            transform: rotate(${Math.random() * 40 - 20}deg);
        `;
        body.appendChild(tape);
    }

    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }`;
    document.head.appendChild(style);
});