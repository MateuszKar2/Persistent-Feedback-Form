
//importuję galerię obazów z gallery-items
//pobieram gallery- za pomocą querySelector
//przypisuje zmiennej "markup"- createItemsMarkup o parametrze(galerię obrazów)
//za pomocą metody .insertAdjacentHTML(beforeend) dadaję "gallery" wewnątrz elementu po wszystkich dzieciach
//tworzę funkcję createItemsMarkup(której parametrem będzie(item)- obraz)
//za pomocą operatora return zwracam wartość z ciała funkcji do "galleryItems", gdzie zostanie wywołana
//wykorzystuję metodę .map, celem otrzymania przekształconej kopii tablicy
//Parametrami metody map. są: "preview"-mały obraz, "original"-duży obraz, "description"-opis obrazka.
//implementuje gotowy szablon tagów HTML/CSS wprowadzając zmianne 
//łączę elementy tablicy za pomocą metody .join
//KOrzystam z bibliotekę simplelightbox aby dodać podpis do obrazków
//wykorzystuję opcje "caption"- podpis/ "cationsData" - pobrać podpis z otrzymanego atrybutu/
//i "captionDalay - dodaje opóżnienie w wyświetleniu podpisu"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector(".gallery");
const markup = createItemsMarkup(galleryItems);
 

gallery.insertAdjacentHTML("beforeend", markup);


 function createItemsMarkup(item) {
 return galleryItems
   .map(({ preview, original, description }) => {
     return `<div class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img
 class="gallery__image"
 src="${preview}"
 alt="${description}"/></a></div>`;})
     .join("");
 
 }

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 50,
});