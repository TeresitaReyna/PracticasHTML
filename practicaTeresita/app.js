/*
    Json. JavaScript Object Notation - Notación de Objetos de JavaScript
    Es un formato de texto sencillo para el intercambio de datos.

    {
        "status":"OK",
        "code":200,
        "total":1,
        "data":[
            {
                "id":1,
                "uuid":"02f0d797-7e01-37fd-b2fd-5cfb49ee11e9",
                "firstname":"Landen",
                "lastname":"Oberbrunner",
                "username":"kirlin.thaddeus",
                "password":"H1}W%cB+",
                "email":"easter.gislason@hotmail.com",
                "ip":"134.9.122.251",
                "macAddress":"BB:C3:F8:B3:37:08",
                "website":"http:\/\/rosenbaum.biz",
                "image":"http:\/\/placeimg.com\/640\/480\/people"
            }
        ]
    }

    Nota: data es un array de objetos.

    ..::|| Métodos de petición HTTP ||::..

    HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un 
    recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces 
    son llamados HTTP verbs.

    ~ CRUD. Es el acrónimo de "Crear, Leer, Actualizar y Borrar", que se usa para referirse a las funciones 
    básicas en bases de datos o la capa de persistencia en un software.
    
    Función anonima
    () = {

    } -> Puede recibir funciones

    setInterval -> Generá un intervalo
    setTimeout -> Da un tiempo para ejecutar una vez
*/

//const input = document.getElementById('searchInput');
const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let users = [];

let url = "https://fakerapi.it/api/v1/users?_quantity=1000";

document.addEventListener('DOMContentLoaded', async () => {
    userList.innerHTML = `<h1>Cargando...</h1>`;
    const data = await loadUsers();
    users = data.data;
    // console.log(users);
    renderUsers(users);
});

input.addEventListener('keyup', e => {
    console.log(input.value);
    // const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()));
    // renderUsers(newUsers);
});

async function loadUsers(){
    let respuesta = await fetch(url);
    return res = respuesta.json();
    //console.log(res);
}

const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');

function renderUsers(users) {
    const itemsString = createUserItems(users);
    userList.innerHTML = itemsString;
}