import { galleryItems } from "./gallery-items.js";

let markupPage = "";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

galleryItems.forEach(({ preview, original, description }) => {
  markupPage += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

addMarkupPage(markupPage);

function addMarkupPage(markup) {
  refs.galleryEl.insertAdjacentHTML("beforeend", markup);
}
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
