// <img src="" alt="Imagem em destaque" class="lightbox-image" />
import Images from "./components/gallery/Images.js";
import Lightbox from "./components/lightbox/Lightbox.js";

const pathImages = [
    '../public/pictures/pexels-digitalbuggu-374559.jpg',
    '../public/pictures/pexels-markusspiske-1089438.jpg',
    '../public/pictures/pexels-markusspiske-177598.jpg',
    '../public/pictures/pexels-peaky-31343632.jpg',
    '../public/pictures/pexels-pixabay-270623.jpg',
    '../public/pictures/pexels-pixabay-270632.jpg',
  ];

const images = new Images();
const lightbox = new Lightbox();

images.createGallery(pathImages);
lightbox.createLightbox();