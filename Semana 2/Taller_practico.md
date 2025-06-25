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

## Parte 2: Objetos pensados para mostrarse

1. Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta.

```js
let persona = {
    nombre: "Juan",
    edad: 20,
    ocupacion: "Programador",
}

const TarjetaPersonaHTML = `
    <div class="tarjetas">
    <h2>${persona.nombre}</h2>
    <p>${persona.edad} años</p>
    <p>${persona.ocupacion}</p>
    </div>
`

document.body.innerHTML = TarjetaPersonaHTML;
```

2. A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM.

```js
let cancion = {
    titulo: "streets",
    artista: "Doja Cat",
    duracion: "2:56",
}

const contenedor = document.getElementById("musica");

contenedor.innerHTML = `
<h2>${cancion.titulo}</h2>
<p>${cancion.artista}</p>
<p>${cancion.duracion}</p>`;
```

3. Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista ```<ul>``` donde cada propiedad sea un ```<li>``` con clave y valor.

```js
const contenedor = document.getElementById("info-producto");

let producto = {
    nombre: "Playera",
    precio: 100,
    stock: 10,
    marca: "Nike",
}

const lista = document.createElement("ul");

for (let clave in producto) {
    const item = document.createElement("li");
    item.textContent = `${clave}: ${producto[clave]}`;
    lista.appendChild(item);
}

contenedor.appendChild(lista);
```

## Parte 3: Listas de Objetos enfocadas en visualización

1. Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto.

```js
const usuarios = [
    { nombre: "Juan Perez", correo: "juanperez@gmail.com" },
    { nombre: "Maria Lopez", correo: "marialopez@gmail.com" },
    { nombre: "Pedro Gomez", correo: "pedrogomez@gmail.com" },
    { nombre: "Ana Martinez", correo: "anamartinez@gmail.com" },
];

const lista = usuarios.map(usuario => {
    const div = document.createElement("div");
    div.classList.add("usuario");
    div.innerHTML = `
        <h2>${usuario.nombre}</h2>
        <p>${usuario.correo}</p>`;
    return div;
});

const contenedor = document.getElementById("info-producto");

lista.forEach(div => {
    contenedor.appendChild(div);
});
```

2. Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un ```<li>```.

```js

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "1984", autor: "George Orwell", año: 1949 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
  ];
  

  const descripciones = libros.map(libro => `${libro.titulo} (${libro.año}) - ${libro.autor}`);
  

  const lista = document.createElement("ul");
  
  descripciones.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
  

  const contenedor = document.getElementById("info-libros");
  contenedor.appendChild(lista);
```

3. Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

```js
const tareas = [
    { descripcion: "Hacer ejercicio", completada: true },
    { descripcion: "Estudiar JavaScript", completada: false },
    { descripcion: "Lavar la ropa", completada: true },
    { descripcion: "Preparar la cena", completada: false }
  ];
  
  function mostrarTareas(tareas) {
    const lista = document.createElement("ul");
  
    tareas.forEach(tarea => {
      const li = document.createElement("li");
      const estado = tarea.completada ? "✅" : "❌";
      li.textContent = `${estado} ${tarea.descripcion}`;
  
     
      if (tarea.completada) {
        li.style.color = "green";
        li.style.textDecoration = "line-through";
      } else {
        li.style.color = "red";
      }
  
      lista.appendChild(li);
    });
  
    return lista;
  }
  
  const contenedor = document.getElementById("lista-tareas");
  const listaHTML = mostrarTareas(tareas);
  contenedor.appendChild(listaHTML);
```
