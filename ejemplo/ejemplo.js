// Objeto JS
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            centimetros: "512cm",
            dimensiones: {
                altura: 1.20,
                ancho: 40,
                colores:{
                    base: 'azul',
                    marco: 'negro',
                },
            },
        },

        fabricacion: {
            pais: "China",
        },
    },
};

/*const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            centimetros: "512cm",
        },

        fabricacion: {
            pais: "China",
        },
    },
};*/

/*const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    direccion: {calle: "1", numero: "25", colonia: "Patitos"},
};

const medidas = {
    peso: "1kg",
    centimetros: "512cm",
};*/

// Añade elementos al objeto
/*producto.peso = '50kg'
producto.medidas = '100cm'*/

// Destructuración de un objeto
/*// const {nombre, precio, informacion} = producto
// const {nombre, precio, informacion: {fabricacion: {pais}}} = producto
const {nombre, precio, informacion: {medidas: {dimensiones: {colores: {marco}}}}} = producto*/

// Spred Operator => Copia del objeto
/*const resultado = {...producto, ...medidas} */

// Objects
const key = Object.keys(producto); // Keys
const valores = Object.values(producto); // Valores
const entradas = Object.entries(producto); // Entradas

// Array
const colores = ['rojo', 'negto', 'azul', 'verde', 'amarillo', 'cafe', 'morado'];
cole

console.table(colores); // Imprime
 