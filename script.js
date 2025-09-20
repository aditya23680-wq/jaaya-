// Floating pink hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-40px';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.opacity = 0.7 + Math.random() * 0.3;
  heart.style.transition = 'transform 6s linear, opacity 6s linear';
  document.getElementById('floating-hearts').appendChild(heart);
  setTimeout(() => {
    heart.style.transform = `translateY(-${window.innerHeight + 80}px)`;
    heart.style.opacity = 0;
  }, 100);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createFloatingHeart, 500);

// Heart blast animation on page load
function blastHearts() {
  const blast = document.getElementById('heart-blast');
  const count = 20;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'blast-heart';
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = '48px';
    heart.style.filter = 'drop-shadow(0 0 10px #ff3366)';
    heart.style.opacity = 1;

    const angle = (i / count) * 360;
    const radius = 200 + Math.random() * 200;
    const translateX = Math.cos(angle * Math.PI / 180) * radius;
    const translateY = Math.sin(angle * Math.PI / 180) * radius;
    
    blast.appendChild(heart);

    setTimeout(() => {
      heart.style.transition = 'transform 1.2s cubic-bezier(.17,.67,.83,.67), opacity 1.2s linear';
      heart.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;
      heart.style.opacity = 0;
    }, 100);

    setTimeout(() => {
      heart.remove();
    }, 1300);
  }
}
window.addEventListener('load', blastHearts);

// Heart Cursor Trail
document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.className = 'cursor-heart';
    heart.innerHTML = '💖';
    document.body.appendChild(heart);

    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in-element');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInElements.forEach(el => {
  observer.observe(el);
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
}
