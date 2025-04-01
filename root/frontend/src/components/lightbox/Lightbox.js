import './Lightbox.css';
import Images from '../gallery/Images.js';

export default class Lightbox {
  constructor() {
    this.imageUploade = new Images();
  }

  createLightbox(path) {
    const divLightbox = document.createElement('div');
    divLightbox.classList.add('lightbox');
    const divLightboxImage = document.createElement('div');
    divLightboxImage.classList.add('lightbox-content');
    divLightbox.appendChild(divLightboxImage);
    const img = document.createElement('img');
    img.classList.add('lightbox-image');
    img.setAttribute('src', path);
    img.setAttribute('alt', path);
    divLightboxImage.appendChild(img);
    const linkImage = document.createElement('a');
    linkImage.classList.add('lightbox-close');
    const icone = document.createElement('i');
    icone.classList.add('bi');
    icone.classList.add('bi-x');
    linkImage.appendChild(icone);
    divLightbox.appendChild(linkImage);
    document.querySelector('main').appendChild(divLightbox);
  }
}
