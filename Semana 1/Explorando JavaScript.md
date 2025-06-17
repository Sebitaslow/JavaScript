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
4.3 Evalúa y muestra en consola el resultado de las siguientes comparaciones:

```js
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);
```

## Parte 5: Condicionales

5.1 Crea un programa que pida al usuario un número y muestre en consola si es mayor, menor o igual a 10.

```js
let numero = prompt("Escribe un numero: ");
numero = Number(numero)

if (numero > 10) {
    console.log("El numero es mayor que 10");
}
else if (numero < 10){
    console.log("El numero es menor que 10");
}
else {
    console.log("El numero es igual a 10");
    
}

```
5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.

```js
let userc = prompt("Nombre de usuario: ")

if(userc === "Admin"){
    alert("Bienvenido Admin, tienes acceso");
    
}
else{
    alert("Bienvenido/a " + nombre);
}
```
5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar.

```js
let numero = prompt("Ingresa un numero: ");
numero = Number(numero);

let mensaje = (numero % 2 === 0) ? "el numro es par" : "El numero es impar";

alert(mensaje);

```
## Parte 6: Consola del Navegador

6.1 Muestra diferentes tipos de mensajes en la consola:

```js
console.time ("TiempoDeEjecucion");

    console.info("Mensaje informativo");
    console.warn("Mensaje de advertencia");
    console.error("Mensje de Error");

    console.group("Grupo");
        console.log("grupo 1");
        console.log("grupo 2");
    console.groupEnd();
    
console.timeEnd ("TiempoDeEjecucion");

```
## Parte 7: Comentarios

7.1 Escribe un pequeño bloque de código donde utilices comentarios de una línea y de varias líneas para explicar lo que hace cada parte.

```js
/* En este codigo encontramos varios tipos de mensajes que se muestran en 
consola dependiendo de si es info, warn
o muchas otras entonces esto nos ayudara a tener un control sobre ciertas cosas que queremos que haga nuestra pagina*/
console.time ("TiempoDeEjecucion");


    console.info("Mensaje informativo");
    console.warn("Mensaje de advertencia");
    console.error("Mensje de Error");
    // console grup nos ayuda a agrupar otras consolas 
    console.group("Grupo");
        console.log("grupo 1");
        console.log("grupo 2");
    console.groupEnd();
    
console.timeEnd ("TiempoDeEjecucion");
```

## Parte 8: Desafío Final

8.1 Crea un archivo HTML y vincúlalo con un archivo .js externo. En ese archivo:

```js
let nombre = prompt("Dame tu nombre: ");
let edad = prompt("Dame tu edad: ");
let ciudad = prompt("Dame tu ciudad: ");

console.log("Hola" + nombre, "tienes" + edad, "años y vives en" + ciudad);

```
