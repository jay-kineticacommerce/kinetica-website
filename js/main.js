// KINETICA — shared site behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Scroll-triggered reveal for elements marked .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Contact form — sends the enquiry to Netlify Forms without leaving the page
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');
    const button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      button.disabled = true;
      status.textContent = 'Sending your message…';
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString()
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        status.textContent = 'Thanks, your message has been sent. We will get back to you.';
      } catch (err) {
        status.textContent = 'Your message could not be sent. Please email jay@kineticacommerce.com instead.';
      } finally {
        button.disabled = false;
      }
    });
  }
});
