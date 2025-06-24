# Ejercicios preparatorios para trabajar con el DOM

## Parte 1: Arrays orientados al DOM

1. Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.

```js
const array = ['amarillo', 'azul', 'verde', 'rojo', 'naranja', 'morado', 'rosa'];
let container = document.getElementById('colores');

container.innerHTML = `<div>`;
array.forEach(color => {
    container.innerHTML += `<li> el color ${color} es muy bonito</li>`;
});
const mensaje = array.map(color => `El color ${color} es muy bonito`).join('<br>');
container.innerHTML += `<p>${mensaje}</p>`;
container.innerHTML += `</div>`;
```
2. A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: p ). Esto te ayudará a simular contenido que luego iría al DOM.

```js
let frasesMotivadoras= [
    "La vida es un viaje, no un destino.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No cuentes los días, haz que los días cuenten.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "La felicidad no es algo hecho. Viene de tus propias acciones.",];
let container = document.getElementById('frases') ;

container.innerHTML = `<div>`;
frasesMotivadoras.forEach(frase => {
    container.innerHTML += `<p>${frase}</p>`;
});
container.innerHTML += `</div>`;
```

3. Recorre un array de números y devuelve otro array de ```<li>``` con cada número.Piensa que será una lista HTML para mostrar luego en pantalla.

```js
const numeros = [1, 2, 3, 5, 6];

const listaDeLi = numeros.map(num => {
  const li = document.createElement('li');
  li.textContent = num;
  return li;
});

const ul = document.getElementById('lista');

listaDeLi.forEach(li => ul.appendChild(li));

console.log("Lista creada correctamente");
```
