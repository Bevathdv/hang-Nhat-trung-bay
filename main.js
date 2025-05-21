// Featured product data: image + link
const featuredImages = [
  {
    src: "pictures/1.jpg", // Update with your image path
    link: "pages/feautures.html"
  },
  {
    src: "pictures/2.jpg",
    link: "pages/feautures.html"
  },
  {
    src: "pictures/3.jpg",
    link: "pages/Feautures.html"
  },
  {
    src: "pictures/4.2.jpg",
    link: "pages/Feautures.html"
  }
];

let current = 0; // Start at first image

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("featured-image");
  const linkElement = document.getElementById("featured-link");

  if (!imgElement || !linkElement) {
    console.warn("Featured image or link not found.");
    return;
  }

  function rotateFeatured() {
    current = (current + 1) % featuredImages.length;

    // Fade out
    imgElement.style.opacity = 0;

    setTimeout(() => {
      imgElement.src = featuredImages[current].src;
      linkElement.href = featuredImages[current].link;
      imgElement.style.opacity = 1;
    }, 500); // Match CSS transition duration
  }

  // Start rotation
  setInterval(rotateFeatured, 5000);
});

