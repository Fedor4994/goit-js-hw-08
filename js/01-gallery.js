import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(item => {
    const itemEl = `<a class="gallery__link" href="large-image.jpg" >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;
    return itemEl;
  })
  .join('');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryElements);

galleryContainerEl.addEventListener('click', onContainerClick);

function onContainerClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  function closeModalByEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => {
        window.addEventListener('keydown', closeModalByEsc);
      },
      onClose: () => {
        console.log('456');
        window.removeEventListener('keydown', closeModalByEsc);
      },
    }
  );
  instance.show();
}
