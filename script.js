let listaTarefas;

const inputTarefa = document.getElementById('texto-tarefa');
const listaOl = document.getElementById('lista-tarefas');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnclear = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnRemoveSel = document.getAnimations('remover-selecionado');

btnCriaTarefa.addEventListener('click', criarTarefa);
function criarTarefa() {
  const textoDaLista = inputTarefa.value;
  const itensLista = document.createElement('li');
  itensLista.innerText = textoDaLista;
  listaOl.appendChild(itensLista);
  itensLista.classList.add('adiciona-item');
  inputTarefa.value = '';
} 

const lista = listaOl.children;
function corDoItem(event) {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
listaOl.addEventListener('click', corDoItem);

function riscaItem() {
  listaOl.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('adiciona-item')) {
      event.target.classList.toggle('completed');
    }
  });
}  
riscaItem();

function limparLista() {
  btnclear.addEventListener("click",function(){
    listaOl.innerHTML= "";
    });
}
limparLista();

function removeFinalizados() {
  btnRemove.addEventListener('click', function() {
    const apagaRiscados = document.querySelectorAll('.completed');
    for(let index = 0; index < apagaRiscados.length; index += 1) {
      listaOl.removeChild(apagaRiscados[index])
    }
  });
}
removeFinalizados();

btnSalvar.addEventListener('click', () => {
  const list = document.getElementById('lista-tarefas');
  localStorage.setItem('listaOl', list.innerHTML);
});

window.onload = function restaurandoLista() {
  const listaSalva = localStorage.getItem('listaOl');
  if (listaSalva != null) {
    const list = document.getElementById('lista-tarefas');
    list.innerHTML = listaSalva;
  }
};

const removeSelected = document.querySelector('#remover-selecionado');

function selectedRemove() {
  const seleciona= document.querySelector('selected');
  if (seleciona) {
    seleciona.remove();
  }
}
