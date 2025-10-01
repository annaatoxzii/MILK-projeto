
const images = [
    {
        title: "LAR DE IDOSOS SÃO VICENTE DE PAULO",
        src: "/imagens/lardearrecadacao.png",
        alt: "Lar de Idosos São Vicente de Paulo"
    },
     {
        title: "RECANTO MENINA",
        src: "/imagens/recanto menina.png",
        alt: "Recanto Menina"
    },
    {
        title: "VILA VICENTINA",
        src: "/imagens/vilavicentina.png",
        alt: "Vila Vicentina"
    },
    {
        title: "EDUCANDÁRIO LAR DO CAMINHO",
        src: "/imagens/lardocaminho.png",
        alt: "Educandário lar do caminho"
    }
 
];

let currentIndex = 0;

const carouselTitle = document.querySelector(".carousel-title");
const carouselImage = document.querySelector(".carousel-image");

document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

function updateCarousel() {
    carouselTitle.textContent = images[currentIndex].title;
    carouselImage.src = images[currentIndex].src;
    carouselImage.alt = images[currentIndex].alt;
}

// Inicializa o carrossel com a imagem atual
updateCarousel();