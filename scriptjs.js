const itemLista = document.querySelector('ul')
const novaTarefa = document.querySelector("#tarefa")
const botao = document.querySelector("#cadastrarTarefa-btn")
const lista = document.getElementsByTagName("li");

const tarefas = []

function mostrarTarefas(){

    itemLista.innerHTML =""
        
    for (tarefa of tarefas){
        const elementoTarefa = document.createElement('li');
        elementoTarefa.classList.add("list-group-item")
        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)
        itemLista.appendChild(elementoTarefa)
    }
}

mostrarTarefas()

function criarTarefa(){
    if(novaTarefa.value.lenght =! 0){
        let valorTarefa = novaTarefa.value
        tarefas.push(valorTarefa)
        novaTarefa.value = ""
        mostrarTarefas()  
    } 
    else{
     alert(Error)
    }

} 
botao.addEventListener("click",function(){
    
    botao.setAttribute("onclick","criarTarefa()")
    lista.addEventListener('click', (event) =>{
        const item = event.target
        if(item.classList.contains("active")){
            item.classList.remove("active")
        }else{
            item.classList.add("active")
        }
    
    })
})
