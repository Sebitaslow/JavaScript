# Misión de la Semana

## Paso 1: Define tu JSON de tarea
Crea un archivo task.json con el siguiente contenido:

```json
{
  "tarea": []
}
```
Aquí se consume la API

```js
const formulario = document.getElementById("formulario-tarea");
const tituloInput = document.getElementById("title");
const descriptionInput = document.getElementById("descripcion");
const ListaTareas = document.getElementById("lista-tareas");

let tasks = [];

formulario.addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const titulo = tituloInput.value.trim();
    const descripcion = descriptionInput.value.trim();
    if (descripcion === '' || titulo === '')return;

    const tarea = {
        titulo,
        descripcion,
        completado: false
    };

    await fetch('http://localhost:3000/tarea', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body : JSON.stringify(tarea)
   });

   tituloInput.value = '';
   descriptionInput.value = '';
   fetchtasks ();
});

async function fetchtasks() {
    
    const Vjson = await fetch('http://localhost:3000/tarea');

    tasks = await Vjson.json();

    visualizarTask();
}

function visualizarTask() {
    ListaTareas.innerHTML = '';

    tasks.forEach((task) =>{
        const div = document.createElement('div');
        div.className = 'task';

        div.innerHTML = `
        <strong> ${task.titulo}</strong><br>
        <em> ${task.descripcion}</em><br>
        `;
        
        if (task.completado){
            div.style.textDecoration = 'line-through';
            div.style.color = 'green';
        }

        const bton = document.createElement('button');
        bton.textContent= 'Completado';

        bton.addEventListener('click', async () =>{
            task.completado = true;

            await fetch (`http://localhost:3000/tarea/${task.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(task)
            });

            fetchtasks()
        });
        const btonEliminar = document.createElement('button');
        btonEliminar.textContent = 'Eliminar';
        btonEliminar.style.marginLeft = '10px';
        btonEliminar.addEventListener('click', async() =>{
            await fetch(`http://localhost:3000/tarea/${task.id}`, {
                method: 'DELETE'
            });
            fetchtasks();
        });
        div.appendChild(bton);
        div.appendChild(btonEliminar);
        ListaTareas.appendChild(div)
 
    });
}

fetchtasks();
```
HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tareas</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    input, button { padding: 8px; margin: 5px; }
    .tarea { margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px; }
  </style>
</head>
<body>

  <h1> Mi lista de tareas</h1>

  <form id="formulario-tarea">
    <input type="text" id="title" placeholder="Titulo de tarea..." required>
    <input type="text" id="descripcion" placeholder="Escribe una tarea..." required>
    <button type="submit">Agregar</button>
  </form>

  <div id="lista-tareas">
    <!-- Las tareas aparecerán aquí -->
  </div>

  <script src="./script.js"> </script>

</body>
</html>
```
