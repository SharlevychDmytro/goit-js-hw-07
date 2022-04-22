import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

refs.galleryEl.addEventListener("click", onClickImage);

addImagesMarkup(createImagesMarkup(galleryItems));

function onClickImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const sourceImg = e.target.dataset.source;
  const alt = e.target.alt;
  openModalImg(sourceImg, alt);
}

function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}
function addImagesMarkup(markup) {
  refs.galleryEl.insertAdjacentHTML("beforeend", markup);
}
function openModalImg(url, alt) {
  const instance = basicLightbox.create(`
      <img src="${url}" alt="${alt}">
  `);
  instance.show();

  refs.galleryEl.addEventListener(
    "keyup",
    (e) => {
      if (e.code !== "Escape") {
        return;
      }
      instance.close();
    },
    { once: true }
  );
}
