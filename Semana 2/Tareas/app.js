let lista = [
    {nombre: "Naranja", precio: 500, cantegoria: "fruta"},
    {nombre: "Uva", precio: 2000, cantegoria: "fruta"},
    {nombre: "Camisa", precio: 50000, cantegoria: "Ropa"},
    {nombre: "Pantalón", precio: 80000, cantegoria: "Ropa"},
    {nombre: "Manzana", precio: 300, cantegoria: "fruta"},
];

let boton = document.getElementById("mostrar-productos");

boton.addEventListener("click",function(){
    let contenedor = document.getElementById("contenedor-productos");

    lista.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - ${item.precio} - ${item.cantegoria}`;
        contenedor.appendChild (li);
    });
})