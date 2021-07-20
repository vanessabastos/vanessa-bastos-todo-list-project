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

const lista = listaOl.children;

function corDoItem(event) {
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
listaOl.addEventListener('click',corDoItem);

function riscaItem() {
  listaOl.addEventListener('dblclick', function(event){
    if (event.target.classList.contains('adiciona-item'))
      event.target.classList.toggle('completed')
  });
  }
riscaItem();

function limparLista() {
  btnclear.addEventListener("click",function(){
    listaOl.innerHTML= "";
    })
  }
limparLista();


