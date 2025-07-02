# Misión de la Semana

## Paso 1: Define tu JSON de tarea
Crea un archivo task.json con el siguiente contenido:

```json
{
    "id": 1,
    "title": "Estudiar Fetch API",
    "description": "Aprender a consumir APIs con JavaScript",
    "completed": false
  }
```
Aquí se consume la API

```js
fetch("http://localhost:4000/task")
  .then(response => response.json())
  .then(data => console.log("GET:", data))
  .catch(error => console.error("Error en GET:", error));
```
