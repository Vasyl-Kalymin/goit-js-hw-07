import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryLIst = document.querySelector(".gallery");
const renderList = createGalleryItems(galleryItems);
galleryLIst.insertAdjacentHTML("afterbegin", renderList);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const Lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});