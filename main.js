/* ============================================================
   Timothy Gaius — Portfolio interactions & animations
   ============================================================ */
(function () {
  'use strict';

  /* ---- Typed role text ---- */
  const typedEl = document.getElementById('typed');
  const roles = [
    'Software Engineer',
    'Web Developer',
    'Full-Stack Builder',
    'Problem Solver'
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function typeLoop() {
    if (!typedEl) return;
    const current = roles[roleIdx];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(typeLoop, 1600);
      }
    } else {
      typedEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 55 : 110);
  }
  typeLoop();

  /* ---- Scroll reveal via IntersectionObserver ---- */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach((el) => io.observe(el));

  /* Trigger hero reveal on load */
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('in-view'));
  });

  /* ---- Navbar scrolled state + active link ---- */
  const navbar = document.getElementById('navbar');
  const toTop = document.getElementById('toTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 500);

    let current = '';
    sections.forEach((sec) => {
      if (y >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinksWrap = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinksWrap.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinksWrap.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navLinksWrap.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );

  /* ---- Animated stats count-up ---- */
  const stats = document.querySelectorAll('.stat-num');
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        cur += step;
        if (cur >= target) { cur = target; el.textContent = cur; }
        else { el.textContent = cur; requestAnimationFrame(tick); }
      };
      tick();
      statIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  stats.forEach((s) => statIO.observe(s));

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Contact form validation + submit ---- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  function setError(name, msg) {
    const input = form.querySelector(`[name="${name}"]`);
    const errEl = form.querySelector(`.error[data-for="${name}"]`);
    if (input) input.classList.toggle('invalid', !!msg);
    if (errEl) errEl.textContent = msg || '';
  }

  function validate() {
    let ok = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { setError('name', 'Please enter your name.'); ok = false; } else setError('name', '');
    if (!emailRe.test(email)) { setError('email', 'Enter a valid email address.'); ok = false; } else setError('email', '');
    if (message.length < 10) { setError('message', 'Message must be at least 10 characters.'); ok = false; } else setError('message', '');
    return ok;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form-status';
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    const data = new FormData(form);

    try {
      const res = await fetch('contact.php', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.status === 'success') {
        status.textContent = `Thanks, ${form.name.value.trim()}! Your message has been sent.`;
        status.className = 'form-status ok';
        form.reset();
      } else {
        status.textContent = json.message || 'Something went wrong. Please try again.';
        status.className = 'form-status err';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again later.';
      status.className = 'form-status err';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });

  /* Clear invalid state as user types */
  form.querySelectorAll('input, textarea').forEach((el) =>
    el.addEventListener('input', () => {
      if (el.classList.contains('invalid')) {
        el.classList.remove('invalid');
        const errEl = form.querySelector(`.error[data-for="${el.name}"]`);
        if (errEl) errEl.textContent = '';
      }
    })
  );
})();
