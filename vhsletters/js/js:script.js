document.addEventListener('DOMContentLoaded', () => {
  // Floating VHS tapes
  for (let i = 0; i < 8; i++) {
    const tape = document.createElement('div');
    tape.textContent = '📼';
    tape.style.cssText = `position:fixed; font-size:4rem; opacity:0.07; z-index:-1; left:${Math.random()*100}vw; top:${Math.random()*100}vh; animation: float ${20 + Math.random()*30}s linear infinite;`;
    document.body.appendChild(tape);
  }

  const style = document.createElement('style');
  style.innerHTML = `@keyframes float { 0% { transform:translateY(100vh) rotate(0deg); } 100% { transform:translateY(-100vh) rotate(720deg); } }`;
  document.head.appendChild(style);
});
