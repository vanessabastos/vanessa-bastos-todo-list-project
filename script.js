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

function duploClick() {
  listaOl.addEventListener("dblclick", function (event) {
  if (event.target.classList.contains("texto-item-list")) {
    event.target.classList.toggle("completed");
    }
  }
)
}
duploClick();
  
function limparLista() {
  btnclear.addEventListener("click",function(){
    listaTarefas.innerHTML= "";
    })
  }
  limparLista();

