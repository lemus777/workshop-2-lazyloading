const isIntersecting = (entry) => {
    return entry.isIntersecting; // es una propiedad, que devolverá true o false si está visible o no
}

const loadImage = (entry) => { // el entry será la imagen
    const container = entry.target; // entry tiene un atributo target que nos da el nodo. Hace referencia al container creado para nuestra imagen (el DIV)
    const wrapper = container.firstChild;
    const imagen = wrapper.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    loadedImages++;
    printLog();

    observer.unobserve(container); // una vez cargada no necesitamos observarla así que la desligamos del observer por nodo
}
// intersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage); //filtramos entries a las que estén interseccionando y por cada una ejecutamos cargar imagen
});


export const registerImage = (imagen) => {
    observer.observe(imagen);
}