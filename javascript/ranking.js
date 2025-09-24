document.addEventListener("DOMContentLoaded", () => {
  const ranking = document.querySelector(".ranking");
  const colEsquerda = document.querySelector(".coluna2");
  const colDireita  = document.querySelector(".coluna3");
  const colCentro   = document.querySelector(".coluna1");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        [colDireita, colEsquerda, colCentro].forEach(c => c.classList.remove("show"));

        setTimeout(() => colDireita.classList.add("show"), 0);
        setTimeout(() => colEsquerda.classList.add("show"), 400);
        setTimeout(() => colCentro.classList.add("show"), 800);

        obs.disconnect();
      }
    });
  }, { threshold: 0.15 }); 

  observer.observe(ranking);
});
