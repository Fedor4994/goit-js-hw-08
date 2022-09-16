import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(item => {
    const itemEl = `<a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                    </a>`;
    return itemEl;
  })
  .join('');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryElements);
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
