
class Piloto {
    constructor(nombre, puntos, puesto, localidad) {
        this.nombre = nombre;
        this.puntos = puntos;
        this.puesto = puesto;
        this.localidad = localidad;
    }
}

// Variables doc
const pUno = document.querySelector("#pPodioUno");
const pDos = document.querySelector("#pPodioDos");
const pTres = document.querySelector("#pPodioTres");
const todos = document.querySelector("#todos");

class APP {
    cargarPuestos() {

    }
}

function cargarJSON() {
    fetch('competidor.json')
        .then(res => res.json() )
        .then(data => {
            
            console.log(data);
            data.forEach(piloto => {
                todos.innerHTML = `hola ${piloto.nombre}`
                console.log(piloto.nombre)
            });
            
        })
        .catch(error => console.log(error) )
}