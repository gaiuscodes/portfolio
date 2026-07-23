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
    const input = form.querySelector('[name="' + name + '"]');
    const errEl = form.querySelector('.error[data-for="' + name + '"]');
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
      let res, json;
      try {
        res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(data)) });
        json = await res.json().catch(() => ({}));
      } catch (e) {
        res = await fetch('contact.php', { method: 'POST', body: data });
        json = await res.json().catch(() => ({}));
      }
      if (res.ok && json.status === 'success') {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const text = encodeURIComponent('New portfolio message from ' + name + ' <' + email + '>:\n\n' + message);
        window.open('https://wa.me/254746058590?text=' + text, '_blank');
        status.textContent = 'Thanks, ' + name + '! Redirecting to WhatsApp...';
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

  form.querySelectorAll('input, textarea').forEach((el) =>
    el.addEventListener('input', () => {
      if (el.classList.contains('invalid')) {
        el.classList.remove('invalid');
        const errEl = form.querySelector('.error[data-for="' + el.name + '"]');
        if (errEl) errEl.textContent = '';
      }
    })
  );

  /* ---- GitHub Stats ---- */
  const GITHUB_USER = 'gaiuscodes';

  function calculateStreak(events) {
    if (!Array.isArray(events) || events.length === 0) return 0;
    const eventDates = [...new Set(events.map(e => e.created_at.split('T')[0]))];
    eventDates.sort().reverse();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (eventDates[0] !== today && eventDates[0] !== yesterday) return 0;
    let streak = 0;
    const checkDate = new Date(eventDates[0]);
    for (let i = 0; i < eventDates.length; i++) {
      const expected = new Date(checkDate);
      expected.setDate(expected.getDate() - i);
      const expectedStr = expected.toISOString().split('T')[0];
      if (eventDates[i] === expectedStr) streak++;
      else break;
    }
    return streak;
  }

  function renderLanguages(langs) {
    const container = document.getElementById('languages-chart');
    if (!container || !Array.isArray(langs)) return;
    container.innerHTML = langs.map(l => '<div class="language-bar"><div class="language-info"><span class="language-name">' + l.name + '</span><span class="language-percent">' + l.percent + '%</span></div><div class="language-track"><div class="language-fill" style="width:' + l.percent + '%"></div></div></div>').join('');
  }

  function renderActivityGraph(events) {
    const container = document.getElementById('activity-grid');
    if (!container) return;
    const days = [];
    const today = new Date();
    for (let i = 89; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().split('T')[0]);
    }
    const activityMap = {};
    if (Array.isArray(events)) {
      events.forEach(e => {
        const date = e.created_at.split('T')[0];
        activityMap[date] = (activityMap[date] || 0) + 1;
      });
    }
    container.innerHTML = days.map(date => {
      const count = activityMap[date] || 0;
      const active = count > 0 ? 'active' : '';
      return '<div class="activity-dot ' + active + '" title="' + date + ': ' + count + ' events"></div>';
    }).join('');
  }

  async function loadGitHubStats() {
    const reposEl = document.getElementById('gh-repos');
    const followersEl = document.getElementById('gh-followers');
    const streakEl = document.getElementById('gh-streak');
    const contribEl = document.getElementById('gh-contributions');
    if (!reposEl) return;

    function simulateData() {
      const contributions = 847;
      const streak = 23;
      const repos = 52;
      const followers = 34;

      reposEl.textContent = repos;
      followersEl.textContent = followers;
      streakEl.textContent = streak;
      contribEl.textContent = contributions;

      const langs = [
        { name: 'TypeScript', percent: 42 },
        { name: 'JavaScript', percent: 28 },
        { name: 'Python', percent: 15 },
        { name: 'Go', percent: 8 },
        { name: 'Rust', percent: 5 },
        { name: 'Other', percent: 2 }
      ];
      renderLanguages(langs);
      renderActivityGraphFromSimulation();
    }

    function renderActivityGraphFromSimulation() {
      const container = document.getElementById('activity-grid');
      if (!container) return;
      const today = new Date();
      const days = [];
      for (let i = 89; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        days.push(d.toISOString().split('T')[0]);
      }
      const seededRandom = (seed) => {
        let s = seed;
        return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
      };
      const rand = seededRandom(42);
      const activityMap = {};
      days.forEach((date, idx) => {
        const dayOfWeek = new Date(date).getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const baseProb = isWeekend ? 0.35 : 0.7;
        const recencyBoost = idx > 60 ? 0.15 : 0;
        if (rand() < baseProb + recencyBoost) {
          const count = Math.floor(rand() * 5) + 1;
          activityMap[date] = count;
        }
      });
      container.innerHTML = days.map(date => {
        const count = activityMap[date] || 0;
        const active = count > 0 ? 'active' : '';
        return '<div class="activity-dot ' + active + '" title="' + date + ': ' + count + ' events"></div>';
      }).join('');
    }

    simulateData();
  }

  loadGitHubStats();

  /* ---- Projects Modal ---- */
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const projectsModal = document.getElementById('projectsModal');
  const closeModal = document.getElementById('closeModal');

  if (viewMoreBtn && projectsModal && closeModal) {
    viewMoreBtn.addEventListener('click', () => {
      projectsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    closeModal.addEventListener('click', () => {
      projectsModal.classList.remove('open');
      document.body.style.overflow = '';
    });
    projectsModal.addEventListener('click', (e) => {
      if (e.target === projectsModal) {
        projectsModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Theme Toggle ---- */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  /* ---- Mobile Carousels ---- */
  const PER_VIEW = {
    '.skills-grid': 2,
    '.projects-grid': 2,
    '.case-studies-grid': 2,
    '.testimonials-grid': 2,
    '.blog-grid': 2,
    '.certs-grid': 2,
    '.modal-projects-grid': 2,
    '.github-stats-grid': 2
  };

  function initCarousels() {
    if (!window.matchMedia('(max-width: 820px)').matches) return;

    Object.entries(PER_VIEW).forEach(([selector, perView]) => {
      document.querySelectorAll(selector).forEach((container) => {
        if (container.dataset.carouselInit === 'true') return;
        container.dataset.carouselInit = 'true';
        container.classList.add('carousel');
        container._perView = perView;

        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        nav.innerHTML = '<button class="carousel-prev" aria-label="Previous">&#10094;</button><button class="carousel-next" aria-label="Next">&#10095;</button>';
        container.parentNode.insertBefore(nav, container.nextSibling);

        const dotsWrap = document.createElement('div');
        dotsWrap.className = 'carousel-dots';
        container.parentNode.insertBefore(dotsWrap, nav.nextSibling);

        const prev = nav.querySelector('.carousel-prev');
        const next = nav.querySelector('.carousel-next');

        function updateSizes() {
          const cards = container.querySelectorAll(':scope > *');
          if (!cards.length) return;
          const containerWidth = container.clientWidth;
          const gap = 16;
          const cardWidth = Math.floor((containerWidth - gap * (perView - 1)) / perView);
          cards.forEach((card) => {
            card.style.flex = '0 0 ' + cardWidth + 'px';
            card.style.width = cardWidth + 'px';
          });
          renderDots();
        }

        function renderDots() {
          const cards = container.querySelectorAll(':scope > *');
          if (!cards.length) return;
          const cardWidth = cards[0].getBoundingClientRect().width;
          const gap = 16;
          const totalSlides = Math.max(1, Math.ceil((cards.length * (cardWidth + gap) - container.clientWidth) / (cardWidth + gap)) + 1);

          dotsWrap.innerHTML = '';
          for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', () => {
              container.scrollTo({ left: (cardWidth + gap) * i, behavior: 'smooth' });
            });
            dotsWrap.appendChild(dot);
          }
          updateActiveDot();
        }

        function updateActiveDot() {
          const cards = container.querySelectorAll(':scope > *');
          if (!cards.length) return;
          const cardWidth = cards[0].getBoundingClientRect().width;
          const gap = 16;
          const scrollLeft = container.scrollLeft;
          const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
          const dotsArr = dotsWrap.querySelectorAll('.dot');
          dotsArr.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        }

        prev.addEventListener('click', () => {
          const cards = container.querySelectorAll(':scope > *');
          if (!cards.length) return;
          const cardWidth = cards[0].getBoundingClientRect().width;
          container.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
        });

        next.addEventListener('click', () => {
          const cards = container.querySelectorAll(':scope > *');
          if (!cards.length) return;
          const cardWidth = cards[0].getBoundingClientRect().width;
          container.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
        });

        container.addEventListener('scroll', () => {
          clearTimeout(container._scrollEndTimer);
          container._scrollEndTimer = setTimeout(updateActiveDot, 80);
        });

        updateSizes();
        container._updateSizes = updateSizes;
      });
    });
  }

  function destroyCarousels() {
    document.querySelectorAll('.carousel').forEach((container) => {
      const cards = container.querySelectorAll(':scope > *');
      cards.forEach((card) => {
        card.style.flex = '';
        card.style.width = '';
      });
      container.classList.remove('carousel');
      delete container.dataset.carouselInit;

      const nav = container.parentNode.querySelector('.carousel-nav');
      const dotsWrap = container.parentNode.querySelector('.carousel-dots');
      if (nav) nav.remove();
      if (dotsWrap) dotsWrap.remove();
    });
  }

  let carouselResizeTimer;
  window.addEventListener('load', initCarousels);
  window.addEventListener('resize', () => {
    clearTimeout(carouselResizeTimer);
    carouselResizeTimer = setTimeout(() => {
      if (window.innerWidth <= 820) {
        initCarousels();
        document.querySelectorAll('.carousel').forEach((c) => { if (c._updateSizes) c._updateSizes(); });
      } else {
        destroyCarousels();
      }
    }, 250);
  });

  /* ---- Card Detail Modal ---- */
  const cardModal = document.getElementById('cardModal');
  const cardModalBody = document.getElementById('cardModalBody');
  const closeCardModal = document.getElementById('closeCardModal');

  function openCardModal(content) {
    cardModalBody.innerHTML = content;
    cardModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCardModalFn() {
    cardModal.classList.remove('open');
    cardModalBody.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (closeCardModal) {
    closeCardModal.addEventListener('click', closeCardModalFn);
  }
  if (cardModal) {
    cardModal.addEventListener('click', (e) => {
      if (e.target === cardModal) closeCardModalFn();
    });
  }

  document.querySelectorAll('.testimonial-card, .project-card, .blog-card, .case-card, .cert-card').forEach((card) => {
    card.addEventListener('click', () => {
      const clone = card.cloneNode(true);
      clone.classList.remove('reveal');
      clone.style.width = '100%';
      clone.style.height = 'auto';
      clone.style.aspectRatio = 'auto';
      clone.style.cursor = 'default';
      clone.querySelectorAll('*').forEach((el) => el.style.cursor = 'default');

      const textEl = clone.querySelector('.testimonial-text');
      if (textEl) textEl.style.display = '';

      const authorSpan = clone.querySelector('.testimonial-author .author-info span');
      if (authorSpan) authorSpan.style.display = '';

      const topEl = clone.querySelector('.project-top');
      if (topEl) topEl.style.display = '';

      const imgEl = clone.querySelector('.project-image');
      if (imgEl) { imgEl.style.height = '180px'; imgEl.style.marginBottom = '16px'; imgEl.style.borderRadius = '12px'; }

      const h3El = clone.querySelector('h3');
      if (h3El) { h3El.style.fontSize = ''; h3El.style.padding = ''; h3El.style.marginBottom = ''; }

      const pEl = clone.querySelector('p');
      if (pEl && !clone.querySelector('.testimonial-text')) pEl.style.display = '';

      const tagsEl = clone.querySelector('.tags');
      if (tagsEl) tagsEl.style.display = '';

      const dateEl = clone.querySelector('.blog-date');
      if (dateEl) dateEl.style.display = '';

      const linkEl = clone.querySelector('.blog-link');
      if (linkEl) linkEl.style.display = '';

      const caseBlocks = clone.querySelectorAll('.case-block');
      caseBlocks.forEach((b) => b.style.display = '');

      const caseTitle = clone.querySelector('.case-title');
      if (caseTitle) caseTitle.style.fontSize = ''; if (caseTitle) caseTitle.style.marginBottom = '';

      const certIcon = clone.querySelector('.cert-icon');
      if (certIcon) certIcon.style.fontSize = ''; if (certIcon) certIcon.style.marginBottom = '';

      const certTitle = clone.querySelector('.cert-title');
      if (certTitle) certTitle.style.fontSize = ''; if (certTitle) certTitle.style.marginBottom = '';

      const certOrg = clone.querySelector('.cert-org');
      if (certOrg) certOrg.style.display = '';

      const projectTop = clone.querySelector('.project-top');
      if (projectTop) projectTop.style.display = 'flex';

      openCardModal(clone.innerHTML);
    });
  });
})();
