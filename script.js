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