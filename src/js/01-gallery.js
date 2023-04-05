//---------------
//przed rozpoczęciem projektu 
//utworzyłem repozytorium
//sklonowałem projekt z parcel-project-template 
//przerzuciłem to wszystko do mojego projektu
//zamieniłem pliki startowe w src z tym co tam było. 
//otworzyłem swój projekt w vsc 
//w terminalu wpisałem nmp install i npm start.
//---------------
//aby umieścić kod CSS biblioteki w projekcie dodaje:
//import(opisany w dokumentacji) tzn.import SimpleLightbox...
//dodatkowy import stylów tzn."simpleLightbox/dist/..."
//importuję galerię obazów z gallery- items
//wywołuję galerię obrazów
//pobieram gallery- za pomocą querySelector
//przypisuje zmiennej "markup"- createIte... o parametrze(galerię obrazów)
//za pomocą metody .insert...(beforeend) dadaję "gallery" wewnątrz elementu po wszystkich dzieciach
//tworzę funkcję createIte...(której parametrem będzie(item)- obraz)
//za pomocą operatora return zwracam wartość z ciała funkcji do "galleryItems", gdzie zostanie wywołana
//wykorzystuję metodę .map, celem otrzymania przekształconej kopii tablicy
//Parametrami metody map. są: "preview"-mały obraz, "original"-duży obraz, "description"-opis obrazka.
//implementuje gotowy szablon tagów HTML/CSS wprowadzając zmianne 
//łączę elementy tablicy za pomocą metody .join
//KOrzystam z bibliotekę simplelightbox aby dodać podpis do obrazków
//wykorzystuję opcje "caption"- podpis/ "cationsData" - pobrać podpis z otrzymanego atrybutu/
//i "captionDalay - dodaje opóżnienie w wyświetleniu podpisu"

// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

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

   