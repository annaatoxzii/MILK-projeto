document.addEventListener("DOMContentLoaded", () => {
  const ranking = document.querySelector(".geralMembros");
  const colCentro = document.querySelector(".cartaz");

  // Observer para animar a cartaz com fade-in e subida
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        colCentro.classList.remove("show");
        setTimeout(() => colCentro.classList.add("show"), 20);
        obs.disconnect();
      }
    });
  }, { threshold: 0.20 });

  if (ranking && colCentro) {
    observer.observe(ranking);
  }


  const membros = document.querySelectorAll('.membro1, .membro3, .membro4, .membro5');

  membros.forEach(membro => {
    membro.style.transition = 'transform 0.3s ease';

    membro.addEventListener('mouseenter', () => {
      membro.style.transform = 'scale(1.05)';
    });

    membro.addEventListener('mouseleave', () => {
      membro.style.transform = 'scale(1)';
    });
  });
});