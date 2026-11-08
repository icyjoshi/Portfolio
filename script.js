const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.querySelector('span').textContent = open ? '−' : '＋';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('span').textContent = '＋';
  }));
}
const dialog = document.querySelector('#image-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#dialog-caption');
document.querySelectorAll('.project-visual img, .case-image img, .campaign-card img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    if (!dialog || !dialogImage) return;
    dialogImage.src = img.src;
    dialogImage.alt = img.alt;
    if (dialogCaption) dialogCaption.textContent = img.alt;
    dialog.showModal();
  });
});
if (dialog) {
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
