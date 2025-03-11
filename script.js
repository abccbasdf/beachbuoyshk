// Example: Toggle Gallery Visibility
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Gallery';
document.querySelector('.gallery').prepend(toggleButton);

const galleryContainer = document.querySelector('.gallery-container');

toggleButton.addEventListener('click', () => {
  if (galleryContainer.style.display === 'none') {
    galleryContainer.style.display = 'flex';
    toggleButton.textContent = 'Hide Gallery';
  } else {
    galleryContainer.style.display = 'none';
    toggleButton.textContent = 'Show Gallery';
  }

  
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const galleryImages = document.querySelectorAll('.gallery-image');
let currentImageIndex = 0;

// Function to open the lightbox and display the clicked image
function openLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImage.src = galleryImages[index].dataset.fullsize; // Load full-size image
  currentImageIndex = index;
}

// Add click event to each gallery image
galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => openLightbox(index));
});

// Close the lightbox
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigate to the previous image
prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].dataset.fullsize; // Load full-size image
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].dataset.fullsize; // Load full-size image
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton) {
    lightbox.style.display = 'none';
  }
});