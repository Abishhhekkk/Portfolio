// Typewriter Effect
const words = ['Electronics Aficionado', 'Aspiring Engineer', 'Committed to Excellence', 'MS ECE @ University of Massachusetts Amherst, United States'];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typewriter = document.getElementById('typewriter');

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typewriter.innerHTML = currentWord;
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typewriter.innerHTML = currentWord;
    }

    if (j === words[i].length && !isDeleting) {
      // Add a delay before deleting
      setTimeout(() => isDeleting = true, 1000); // 1-second pause before deleting
    }
    
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}
type();



// Animate skills on scroll using GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.skills-group').forEach((group, index) => {
  gsap.from(group, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: group,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Scroll Animation for Experience Cards
const experienceCards = document.querySelectorAll('.experience-card');

const checkScroll = () => {
  experienceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight) {
      card.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Project Navigation
const projects = document.querySelectorAll('.project');
let currentProjectIndex = 0;

// Function to update project visibility
function updateProjects() {
  projects.forEach((project, index) => {
    project.style.display = index === currentProjectIndex ? 'block' : 'none';
  });
}

// Function to navigate through projects
function navigateProjects(direction) {
  if (direction === 'next') {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  } else if (direction === 'prev') {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  }
  updateProjects();
}

// Initial display of projects
updateProjects();

window.onload = () => {
    // Show popup after 3 seconds
    setTimeout(() => {
        document.getElementById('popup').classList.add('show');
    }, 3000);

    // Close the popup
    document.getElementById('close-btn').onclick = () => {
        document.getElementById('popup').classList.remove('show');
    }

    // Close the popup if clicked outside
    window.onclick = (event) => {
        if (event.target === document.getElementById('popup')) {
            document.getElementById('popup').classList.remove('show');
        }
    }
}


function typeWriterEffect(text, elementId, speed = 100, holdTime = 2000) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Pause after full text is displayed
      setTimeout(() => {
        // Optional: Do something after holdTime (e.g., remove text or restart)
        // element.innerHTML = ''; // Uncomment to clear after 2 sec
      }, holdTime);
    }
  }

  // Start with empty content and type
  element.innerHTML = '';
  setTimeout(type, 500); // initial delay before typing starts
}
