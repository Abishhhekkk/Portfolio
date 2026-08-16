/* ============================================================
   TYPEWRITER EFFECT
   ============================================================ */

const words = [
  'Embedded Systems Engineer',
  'Computer Architecture Enthusiast',
  'Hardware & VLSI Engineer',
  'MS ECE @ University of Massachusetts Amherst'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriter = document.getElementById('typewriter');

function type() {

  if (!typewriter) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typewriter.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      isDeleting = true;

      setTimeout(type, 1800);

      return;
    }

  } else {

    typewriter.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      wordIndex =
        (wordIndex + 1) % words.length;

      setTimeout(type, 400);

      return;
    }
  }

  setTimeout(
    type,
    isDeleting ? 55 : 90
  );
}

type();


/* ============================================================
   GSAP — SKILLS SCROLL ANIMATION
   ============================================================ */

if (
  typeof gsap !== 'undefined' &&
  typeof ScrollTrigger !== 'undefined'
) {

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils
    .toArray('.skills-group')
    .forEach((group, index) => {

      gsap.from(group, {

        opacity: 0,

        y: 35,

        duration: 0.8,

        delay: index * 0.1,

        ease: 'power2.out',

        scrollTrigger: {

          trigger: group,

          start: 'top 85%',

          toggleActions:
            'play none none none'
        }

      });

    });
}


/* ============================================================
   EXPERIENCE CARD SCROLL ANIMATION
   ============================================================ */

const experienceCards =
  document.querySelectorAll('.experience-card');

function checkExperienceScroll() {

  experienceCards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if (
      cardTop <
      window.innerHeight * 0.88
    ) {

      card.classList.add('animate');

    }

  });

}

window.addEventListener(
  'scroll',
  checkExperienceScroll,
  { passive: true }
);

window.addEventListener(
  'load',
  checkExperienceScroll
);


/* ============================================================
   UNDERGRADUATE PROJECTS
   SHOW / HIDE
   ============================================================ */

const showUGButton =
  document.getElementById('show-ug-projects');

const ugProjects =
  document.getElementById('ug-projects');

if (showUGButton && ugProjects) {

  showUGButton.addEventListener(
    'click',
    () => {

      const isOpen =
        ugProjects.classList.toggle('show');

      showUGButton.classList.toggle(
        'active',
        isOpen
      );

      const buttonText =
        showUGButton.querySelector(
          'span:first-child'
        );

      if (buttonText) {

        buttonText.textContent =
          isOpen
            ? 'Hide Undergraduate Projects'
            : 'Show Undergraduate Projects';

      }

    }
  );

}


/* ============================================================
   POPUP
   ============================================================ */

function initializePopup() {

  const popup =
    document.getElementById('popup');

  const closeButton =
    document.getElementById('close-btn');

  if (!popup) return;


  /* Show popup after 3 seconds */

  setTimeout(() => {

    popup.classList.add('show');

  }, 3000);


  /* Close button */

  if (closeButton) {

    closeButton.addEventListener(
      'click',
      () => {

        popup.classList.remove('show');

      }
    );

  }


  /* Click outside popup */

  window.addEventListener(
    'click',
    (event) => {

      if (event.target === popup) {

        popup.classList.remove('show');

      }

    }
  );

}


/* ============================================================
   INITIALIZE
   ============================================================ */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    initializePopup();

    checkExperienceScroll();

  }
);
