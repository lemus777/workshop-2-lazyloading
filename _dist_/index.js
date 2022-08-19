import { registerImage } from "./lazy.js";


const mountNode = document.getElementById('images');
const addButton = document.getElementById('addButton');
const delButton = document.getElementById('delButton');

const max = 123;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min) + min);

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'bg-gray-300';
    imageWrapper.style.minHeight = '100px';
    imageWrapper.style.display = 'inline-block';

    
    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);

    appendedImages++; // esto modifica el script insertado en html para llevar la cuenta, ver index.html
    printLog();

    return container;
};


const addImage = () => {
    const newImage = createImageNode(); // aqui si lleva paréntesis
    mountNode.appendChild(newImage);
    registerImage(newImage); // esto usa la funcion importada para ver si está visible la imagen
}

addButton.addEventListener('click', addImage); // aqui el addImage va sin el paréntesis

// por qué al llamar funciones hay veces que lleva paréntesis y otras que no?

const delImage = () => {
    [...mountNode.childNodes].forEach(child => {child.remove();})
}

delButton.addEventListener('click', delImage);




