document.addEventListener('DOMContentLoaded', () => {
  // Sincronizador de Reloj UTC
  const clockEl = document.getElementById('sys-time');
  
  const updateOrbitalClock = () => {
    const now = new Date();
    if (clockEl) {
      const ms = Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0');
      clockEl.textContent = now.toTimeString().split(' ')[0] + '.' + ms;
    }
  };

  setInterval(updateOrbitalClock, 50);
  updateOrbitalClock();

  // Navegación instantánea mediante el teclado numérico [1, 2, 3]
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const isInsidePages = window.location.pathname.includes('/pages/');
    const rootPath = isInsidePages ? '../' : './';
    const pagesPath = isInsidePages ? './' : 'pages/';

    if (e.key === '1') window.location.href = `${rootPath}index.html`;
    if (e.key === '2') window.location.href = `${pagesPath}projects.html`;
    if (e.key === '3') window.location.href = `${pagesPath}manufacturing.html`;
    if (e.key === '4') window.location.href = `${pagesPath}manifesto.html`;
    if (e.key === '5') window.location.href = `${pagesPath}contact.html`;
  });
});