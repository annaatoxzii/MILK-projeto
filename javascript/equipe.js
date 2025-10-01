document.addEventListener("DOMContentLoaded", () => {
  const ranking = document.querySelector(".geralMembros");
  const colCentro = document.querySelector(".cartaz");


  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        [colCentro].forEach(c => c.classList.remove("show"));

        setTimeout(() => colCentro.classList.add("show"), 20);

        obs.disconnect();
      }
    });
  }, { threshold: 0.20 }); 

  observer.observe(ranking);
});
