#Ejercicios preparatorios para trabajar con el DOM

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
