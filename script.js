const tarefas = []

function criarTarefaNaTela(texto) {
    let li = document.createElement("li")
    li.innerHTML = '<input type="checkbox" class="checkbox">' + texto + '<span onclick="deletarTarefa(this)">✕</span>'
    document.querySelector("ul").appendChild(li)
}

const tarefasSalvas = localStorage.getItem("tarefas")
if (tarefasSalvas) {
    tarefas.push(...JSON.parse(tarefasSalvas))
    tarefas.forEach(tarefa => criarTarefaNaTela(tarefa))
}

function adicionarTarefa() {
    let input = document.querySelector("input").value

    if (input === "") {
        alert("Nenhuma tarefa foi adicionada")
        return
    } else {
        tarefas.push(input)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        criarTarefaNaTela(input)

    }

    document.querySelector('input').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
    localStorage.removeItem("tarefas")

}