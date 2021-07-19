const inputTarefa = document.getElementById('texto-tarefa');
const listaOl = document.getElementById('lista-tarefas');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnclear = document.getElementById('apaga-tudo')

btnCriaTarefa.addEventListener('click', criarTarefa);

function criarTarefa() {
    const textoDaLista = inputTarefa.value;
    const itensLista = document.createElement('li');
    itensLista.innerText = textoDaLista;
    listaOl.appendChild(itensLista);
    itensLista.classList.add('adiciona-item');
    inputTarefa.value = '';
    
}

function limparLista() {
  btnclear.addEventListener("click",function(){
    listaTarefas.innerHTML= "";
    })
  }
limparLista();

//adicionando cor ao item
const lista = listaOl.children;

function corDoItem(event) {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
listaOl.addEventListener('click',corDoItem);

//adicionando duplo click 

function riscaItem(event) {
  if (event.target.classList.value !== 'completed' && event.target.classList.value === 'selected') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
  console.log(event.target.classList.value);
}

listaOl.addEventListener('dblclick', riscaItem);

// botão para apagar toda lista

function removendoItem() {
  listaOl.remove();
}

const apagandoTudo = document.querySelector('#apaga-tudo');
apagandoTudo.addEventListener('click', removendoItem);


