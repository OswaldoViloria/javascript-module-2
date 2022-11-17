const imagenesArray = [
    "imagen/imagen1.webp",
    "imagen/Imagen2.jpg",
    "imagen/imagen3.jpg",
    "imagen/imagen4.jpg",
    "imagen/imagen5.jpg"
];

const time = 2000
let posicionActual = 0;
let imagenEl = document.querySelector('#imagen-carrusel');
let autoback = document.querySelector("#autoback");
let back = document.querySelector("#back");
let stop = document.querySelector("#stop");
let forward = document.querySelector("#forward");
let autoforward = document.querySelector("#autoforward");

function pasarFoto(){
    if(posicionActual >= imagenesArray.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
};

function retrocederFoto(){
    if(posicionActual <= 0) {
        posicionActual = imagenesArray.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
};

function renderizarImagen (){
    imagenEl.src = imagenesArray[posicionActual]
    imagenEl.style.backgroundImage = `url(${imagenesArray[posicionActual]})`;
};
   
function playIntervalo(){
    intervalo = setInterval(pasarFoto, time)
    forward.setAttribute('disabled', true);
    back.setAttribute('disabled', true);
    autoforward.setAttribute('disabled', true);
    autoback.setAttribute('disabled', false);
    stop.removeAttribute('disabled');
};

function stopIntervalo(){
    clearInterval(intervalo);
    forward.removeAttribute('disabled');
    back.removeAttribute('disabled');
    autoforward.removeAttribute('disabled');
    autoback.removeAttribute('disabled');
    stop.setAttribute('disabled', true);
};

forward.addEventListener('click', pasarFoto);
back.addEventListener('click', retrocederFoto);
autoforward.addEventListener('click', playIntervalo);
autoback.addEventListener('click', playIntervalo);
stop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();