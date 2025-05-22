// === Featured product data: image + title + description + link ===
const featuredProducts = [
  {
    src: "pictures/1.jpg",
    title: "Product Name 1",
    description: "Short description of product 1.",
    link: "pages/features1.html"
  },
  {
    src: "pictures/2.jpg",
    title: "Product Name 2",
    description: "Short description of product 2.",
    link: "pages/features2.html"
  },
  {
    src: "pictures/3.jpg",
    title: "Product Name 3",
    description: "Short description of product 3.",
    link: "pages/features3.html"
  },
  {
    src: "pictures/4.2.jpg",
    title: "Product Name 4",
    description: "Short description of product 4.",
    link: "pages/features4.html"
  }
];

let current = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", () => {
  const imgEl = document.querySelector(".yours-slide img");
  const titleEl = document.querySelector(".yours-title");
  const descEl = document.querySelector(".yours-description");
  const linkEl = document.querySelector(".yours-slide-link");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slider = document.querySelector(".yours-slider");

  if (!imgEl || !titleEl || !descEl || !linkEl) {
    console.warn("One or more slider elements not found.");
    return;
  }

  function showSlide(index) {
    const product = featuredProducts[index];

    imgEl.style.opacity = 0;
    titleEl.style.opacity = 0;
    descEl.style.opacity = 0;

    setTimeout(() => {
      imgEl.src = product.src;
      imgEl.alt = product.title;
      titleEl.textContent = product.title;
      descEl.textContent = product.description;
      linkEl.href = product.link;

      imgEl.style.opacity = 1;
      titleEl.style.opacity = 1;
      descEl.style.opacity = 1;
    }, 300);
  }

  function nextSlide() {
    current = (current + 1) % featuredProducts.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + featuredProducts.length) % featuredProducts.length;
    showSlide(current);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  slider.addEventListener("mouseenter", () => clearInterval(intervalId));
  slider.addEventListener("mouseleave", () => {
    intervalId = setInterval(nextSlide, 8000);
  });

  showSlide(current);
  intervalId = setInterval(nextSlide, 8000);
});
