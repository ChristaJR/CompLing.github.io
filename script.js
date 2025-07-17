document.getElementById('joinBtn').addEventListener('click', () => {
  // You can update the URL to your form or mailto link
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSenaygCVpTXadmvewqrE09007uw8-4QHjq4zZYJ3kZoPzQLTg/viewform?usp=dialog';
});

// Add scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.mission, .about-intro, .resources-intro, .calendar-section, .mission-item, .vision-item, .resource-item, .drive-box, .sponsor-box');

  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button, .drive-link');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
});
