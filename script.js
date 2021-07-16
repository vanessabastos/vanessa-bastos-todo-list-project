// function createListItem() {
//   const listItem = document.createElement('li');
//   listItem.className = 'tarefas';
//   listItem.innerText = '';

//   return listItem;
// }

// function createList() {
//   //<ol id="lista-tarefas">
//   //<li class= "tarefas"></li>
//   //</ol>
//   const list = document.getElementById('tarefas');
//   const listItem = createListItem();

//   list.appendChild(listItem);
// }

// function handleClick() {
//   const list = document.getElementById('tarefas');
//   const listItem = createListItem();
// }

// function addEventToButton() {
//   const button = document.getElementById('criar-tarefa');

//   button.addEventListener('click'. handleClick);
// }
// window.onload = function() {
//   createList();
//   addEventToButton();
// }

const inputTarefa = document.getElementById('texto-tarefa');
const listaOl = document.getElementById('lista-tarefas');
const btnCriaTarefa = document.getElementById('criar-tarefa');

btnCriaTarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
    const textoDaLista = inputTarefa.value;
    const itensLista = document.createElement('li');
    itensLista.innerText = textoDaLista;
    listaOl.appendChild(itensLista);
    itensLista.classList.add('adiciona-item');
    inputTarefa.value = '';
}


