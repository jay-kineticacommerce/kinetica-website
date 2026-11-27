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

  // Contact form — compiles input into a pre-filled mailto link (no backend required)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const company = data.get('company') || '';
      const email = data.get('email') || '';
      const channels = data.get('channels') || '';
      const message = data.get('message') || '';

      const subject = `New inquiry from ${name}${company ? ' (' + company + ')' : ''}`;
      const bodyLines = [
        `Name: ${name}`,
        `Company: ${company}`,
        `Reply-to email: ${email}`,
        `Channels: ${channels}`,
        '',
        'Message:',
        message
      ];
      const body = bodyLines.join('\n');
      const mailto = `mailto:jay@kineticacommerce.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const status = document.querySelector('#form-status');
      window.location.href = mailto;
      if (status) {
        status.textContent = 'Opening your email client with this message pre-filled — just hit send.';
      }
    });
  }
});
