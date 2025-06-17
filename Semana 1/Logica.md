# Condicional

## Ejercicio: Clasificador de Triángulos

- Programa que reciba tres números positivos que representan las longitudes de los lados de un triángulo. El programa debe determinar si los lados forman un triángulo válido y, si es válido, clasificarlo

```js
let lado1 = prompt("Ingrese el primer lado del triángulo");
let lado2 = prompt("Ingrese el segundo lado del triángulo");
let lado3 = prompt("Ingrese el tercer lado del triángulo");

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}
```

## Metodos de listas

# Ejercicio 1
Quita el primer elemento de una variedad de frutas.

```js
let frutas = ['manzana', 'banana', 'naranja', 'uva'];
frutas.shift();
```

# Ejercicio 2
Agrega un número al final de una matriz de números.

```js
let numeros = [1, 2, 3, 4, ];
numeros.push(5);
```

# Ejercicio 3
Agrega un elemento al principio de una matriz de palabras.

```js
let palabras = ['sol', 'luna', 'estrella',];
palabras.unshift('universo');
```

# Ejercicio 4
Elimina el último elemento de una matriz de colores.

```js
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
colores.pop();
```

# Ejercicio 5
Extrae una porción de un array sin modificar el original.

```js
let animales = ['perro', 'gato', 'pez', 'ave'];
let algunosanimales = animales.slice(1, 4);
```

# Ejercicio 6
Reemplace un elemento en una posición específica del array.

```js
let frutas = ['manzana', 'banana', 'naranja', 'uva'];
frutas[1] = 'pera';
```

# Ejercicio 7
Une los elementos de una matriz de palabras en una sola cadena separada por espacios.

```js
let palabra = ['sol', 'luna', 'estrella', 'universo'];
let frase = palabra.join(' ');
```

# Ejercicio 8
Ordena alfabéticamente un array de nombres.

```js
let nombres = ['Juan', 'Maria', 'Pedro', 'Ana'];
nombres.sort();
```

# Ejercicio 9
Invierta el orden de los elementos de un array.

```js
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.reverse();
```

# Ejercicio 10
Verifique si existe un valor específico dentro del arreglo.

```js
let frutas = ['manzana', 'banana', 'naranja'];
let existe = frutas.includes('banana');
```


