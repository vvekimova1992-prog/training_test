'use strict';
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const filterButtons = document.querySelectorAll('.pub-controls button[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelectorAll('.pub-item[data-category]').forEach(item => {
    item.hidden = selected !== 'all' && item.dataset.category !== selected;
  });
}));
const dialog = document.getElementById('photo-dialog');
const image = document.getElementById('lightbox-image');
const caption = document.getElementById('lightbox-caption');
if (dialog && image && caption && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.photo-open[data-photo]').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.photo;
      image.alt = button.querySelector('img')?.alt || 'Arctic fieldwork photograph';
      caption.textContent = button.dataset.caption || '';
      dialog.showModal();
    });
  });
  document.getElementById('photo-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
}