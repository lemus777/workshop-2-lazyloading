const isIntersecting = (entry) => {
    return entry.isIntersecting; // es una propiedad, que devolverá true o false si está visible o no
}

const accion = (entry) => { // el entry será la imagen
    const nodo = entry.target; // entry tiene un atributo target que nos da el nodo
    console.log('holis');

    observer.unobserve(nodo); // una vez cargada no necesitamos observarla así que la desligamos del observer por nodo
}
// intersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});


export const registerImage = (imagen) => {
    observer.observe(imagen);
}