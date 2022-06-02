// colocá las declaraciones acá
//1er paso a)
let listaDeTareas = []
let inputTarea = document.querySelector('#task')
let inputPrioridad = document.querySelector('#prioridad')
let ul = document.querySelector('#lista-de-tareas')
let btn = document.querySelector('#agregar')




//declaramos el class Tarea
//1er paso b)
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre,
            this.prioridad = prioridad
    }
    agregarTarea(array) {
        listaDeTareas.push(array)
    }

}//Fin class Tarea

//2do paso

const mostrarLista = () => {
    inputTarea.value = ''
    ul.innerHTML = ''
    listaDeTareas.forEach((todo, index) => (
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"
            id="${index}"> ${todo.nombre} - Priodidad: ${todo.prioridad}<i class="fa fa-times-circle" onClick="eliminar(${index})"></i>
        </li>
        `
    ))
};//Fin funcion mostrarLista


//4to paso
const todoList = () => {
    let tarea = new Tarea(inputTarea.value, inputPrioridad.value)
    console.log(inputTarea.value, inputPrioridad.value)
    tarea.agregarTarea(tarea)
    mostrarLista()
}

const eliminar = (index) => {
    listaDeTareas.splice(index, 1)
    mostrarLista()
}



btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!inputTarea.value || inputPrioridad.value === 'Prioridad') {
        alert('Debe ingresar una tarea o una prioridad')
        mostrarLista()
    } else {
        todoList()
    }
})