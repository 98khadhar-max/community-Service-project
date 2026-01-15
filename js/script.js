// ================= SCROLL ANIMATION =================

// Select all sections to animate
const animatedSections = document.querySelectorAll(
  '.project-intro, .activities, .team, .gallery'
);

// Add initial hidden styles
animatedSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
});

// On scroll, show sections
window.addEventListener('scroll', () => {
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.8s ease';
    }
  });
});
