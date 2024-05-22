const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");

adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
    const novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = tarefaTexto;
    listaTarefas.appendChild(novaTarefa);
    tarefaInput.value = "";
  }
}