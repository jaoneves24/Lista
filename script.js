let Ntarefa = document.querySelector('#Ntarefa');
let add = document.querySelector('#add');
let lista = document.querySelector('#lista');

Ntarefa.addEventListener('keypress', (e) => {

  if(e.keycode = 15){ 
    //um "=" para o elemento "keycode" funcionar
    
    let tarefa = {
      nome: Ntarefa.value,
      id: gerarid()
    }
    addtarefa(tarefa);
  }

});
add.addEventListener('click', (e)=>{
  let tarefa = {
    nome: Ntarefa.value,
    id: gerarid(),
  }
  addtarefa(tarefa);
});

function gerarid() {
  return Math.floor(Math.random()* 3000);
}

function addtarefa(tarefa) {
  let li = cirarLI(tarefa);  
  lista.appendChild(li);
  Ntarefa.value = '';

}

function cirarLI(tarefa){

  let li = document.createElement('li');
  let span= document.createElement('span');
  span.classList.add('tarefas');
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div');

  let editar = document.createElement('button');
  editar.classList.add('editar');

  let excluir = document.createElement('button');
  excluir.classList.add('excluir');
  

  div.appendChild(editar);
  div.appendChild(excluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;

}
