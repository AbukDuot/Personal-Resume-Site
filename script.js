var typed = new Typed('.typed', {
    strings: ['Frontend Developer', 'Excel specialist.'],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true
  });
  
  
  // Skill Section 
  const skillBars = document.querySelectorAll('.skill-bar');
  
 function animateSkillBars() {
    skillBars.forEach(skillBar => {
      const skillLevel = skillBar.previousElementSibling.querySelector('.skill-value').textContent;
      skillBar.style.width = skillLevel;
    });
  }
  
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  });
  
  skillBars.forEach(skillBar => {
    observer.observe(skillBar);
  });
  
  
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 50,
  });
  ScrollReveal().reveal(".pic, .profile-pic, .about-img", { origin: "top" });
  ScrollReveal().reveal(
    ".project",
    { origin: "bottom" }
    
  );

  ScrollReveal().reveal(
    ".journey",
    { origin: "bottom" }
    
  );

  ScrollReveal().reveal(
    ".education",
    { origin: "bottom" }
    
  );
  ScrollReveal().reveal("#home h1, h2,h3,p", { origin: "rigt" });
  
  const hamburgerMenu = document.querySelector('.hamburger-menu-lines');
  const navLinks = document.querySelector('.nav-links');
  
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenulines.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
