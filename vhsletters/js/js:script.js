/* ============================================================
   VHS LETTERS — JavaScript
   FAQ accordion, mobile nav, scroll reveal, smooth scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Mobile Navigation ----- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileLinks = document.querySelectorAll('.nav__mobile a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (nav && !nav.contains(e.target)) {
      nav.classList.remove('nav--open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });


  /* ----- FAQ Accordion ----- */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('faq__item--open');
          const otherAnswer = other.querySelector('.faq__answer');
          const otherQuestion = other.querySelector('.faq__question');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      if (isOpen) {
        item.classList.remove('faq__item--open');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('faq__item--open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* ----- Scroll Reveal ----- */
  const revealElements = document.querySelectorAll('.reveal');
  const staggerElements = document.querySelectorAll('.reveal-stagger');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-stagger--visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
  staggerElements.forEach(el => staggerObserver.observe(el));


  /* ----- Smooth Scroll for Anchor Links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector('.nav')?.offsetHeight || 64;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });


  /* ----- Nav Background on Scroll ----- */
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      nav.style.background = 'rgba(12, 10, 9, 0.95)';
    } else {
      nav.style.background = 'rgba(12, 10, 9, 0.85)';
    }

    lastScroll = currentScroll;
  }, { passive: true });

});
