function order(produk) {
  const pesan = encodeURIComponent(`Halo, saya mau pesan *${produk}* dari CacingJuara. Apakah stok tersedia?`);
  window.open(`https://wa.me/6281234567890?text=${pesan}`, '_blank');
}

function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.position = 'absolute';
    menu.style.top = '70px';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.background = 'rgba(13, 27, 42, 0.98)';
    menu.style.flexDirection = 'column';
    menu.style.padding = '20px';
    menu.style.textAlign = 'center';
    menu.style.gap = '20px';
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animasi scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
