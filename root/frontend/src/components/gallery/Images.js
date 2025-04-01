import './Images.css';

export default class Images {
  constructor() {  
  }

  createGallery(pathArray) {
    let numerador = 1;
    const divGallery = document.createElement('div');
    divGallery.classList.add('gallery')
    const divgalleryItem = document.createElement('div');
    divgalleryItem.classList.add('gallery-item')
    pathArray.forEach(path => {
        const img = document.createElement('img');
        img.setAttribute('src', path);
        img.setAttribute('data-src', path);
        img.setAttribute('alt', `imagem ${numerador}`)
        img.classList.add('gallery-image')
        divgalleryItem.appendChild(img);
        divGallery.appendChild(divgalleryItem)
        document.querySelector('main').appendChild(divGallery);
        numerador++
    })
  }


}
