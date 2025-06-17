## Parte 1: Explorando JavaScript

1.1 Explica con tus palabras qué es JavaScript y en qué se diferencia de HTML y CSS.

Bueno JavaScript es un Lenguaje de programacion orientado a el apartado logico pero tambien visual de una pagina web lo que permite que la pagina sea interactiva y dinámica.

1.2 Enumera al menos tres características principales de JavaScript.

- JavaScript se ejecuta en el navegador sin necesidad de compilarlo
- Es un lenguaje de alto nivel lo que permite que sea aun mas comprensible a personas (Humanos)
- En JavaScript se puede utilizar una amplia variedad de tareas desde backend y frontend

1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?

Significa que el código se ejecuta linea por linea sin necesidad de ser compilado previamente a un código de máquina

## Parte 2: Variables y Tipos de Datos

2.1 Declara una variable nombre y asígnale tu nombre. Luego, muestra un saludo en la consola que diga "Hola, [nombre]".

```js
let nombre = "Sebastian"
console.log("Hola" + nombre);

```

2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().

```js
let numeroEntero = 10;
let numeroDecimal = 1.32;
let Texto = "Cadena de texto"

console.log(numeroEntero);
console.log(numeroDecimal);
console.log(Texto);

```

2.3 Declara una constante llamada PI con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.

```js
const PI = 3.1416
console.log(PI);

PI = 3.34
//Genera un error en la consola

```

2.4 Declara una variable sin asignarle valor. Muestra en consola qué contiene.

```js
let Variable;
console.log(Variable);

```

2.5 Crea una variable con valor null y otra con un valor booleano. Muestra ambos en consola.

```js
let Valor = null
let Valor2 = Boolean

console.log(Valor);
console.log(Valor2);

```
## Parte 3: Entrada y Salida de Datos

3.1 Usa prompt() para pedirle al usuario su edad y guárdala en una variable. Luego, muestra en consola un mensaje que diga "Tienes [edad] años".

```js
let edad = prompt("¿Cual es tu edad?")
console.log("Tienes" + edad + "años");

```
3.2 Usa alert() para mostrar un mensaje de bienvenida.

```js
alert("¡Bienvenid@ a la Pagina!")

```

3.3 Usa confirm() para preguntar al usuario si desea continuar. Muestra en consola el valor que devuelve esta función.

```js
let continuar = confirm ("¿Desea continuar?")
console.log(continuar);

```
## Parte 4: Operadores

4.1 Declara dos variables numéricas. Realiza y muestra los resultados de las siguientes operaciones: suma, resta, multiplicación, división y módulo.

```js
let valor1 = 10
let valor2 = 2

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);
console.log(valor1 % valor2);
```

4.2 Declara dos variables con cadenas de texto y únelas en una nueva variable usando el operador de concatenación.

```js
let texto1 = "Hola Mundo, ";
let texto2 = "Hello world";

let concatenar = texto1 + texto2;
console.log(concatenar);
```
