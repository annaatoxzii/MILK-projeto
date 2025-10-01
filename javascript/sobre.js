const faders = document.querySelectorAll('.textoo, .box, .carousel-container, .cartaz');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add('fade-in');
  appearOnScroll.observe(fader);
});

const botaoColeta = document.querySelector('.botaoo');
botaoColeta.addEventListener('click', e => {
  e.preventDefault();
});

