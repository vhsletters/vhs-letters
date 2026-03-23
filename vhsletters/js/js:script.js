document.addEventListener('DOMContentLoaded', () => {
  // Optional: add glitch to neon text every 10 seconds
  setInterval(() => {
    document.querySelectorAll('.neon').forEach(el => {
      el.classList.add('glitch');
      setTimeout(() => el.classList.remove('glitch'), 800);
    });
  }, 10000);
});
