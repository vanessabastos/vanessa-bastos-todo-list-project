const btnCriarTarefa = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const inputTarefa = document.getElementById("texto-tarefa");
const btnclear = document.getElementById("apaga-tudo");


btnCriarTarefa.addEventListener('click',adicionaTarefa);

function adicionaTarefa(event) {
  const textoLista = inputTarefa.value;
  const itensLista = document.createElement("li");
  itensLista.innerText = textoLista;
  itensLista.classList.add("texto-item-list");
  listaTarefas.appendChild(itensLista);
  inputTarefa.value = '';
}









