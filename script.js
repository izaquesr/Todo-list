const tarefas = []

function criarTarefaNaTela(tarefa) {
    let li = document.createElement("li")

    li.innerHTML = `
        <input type="checkbox" class="checkbox" ${tarefa.concluida ? "checked" : ""}>
        ${tarefa.texto}
        <span>✕</span>
    `

    li.querySelector("span").addEventListener("click", () => {
        deletarTarefa(tarefa.id)
    })

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
    }

    const novaTarefa = {
        id: Date.now(),
        texto: input,
        concluido: false
    }

    tarefas.push(novaTarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    criarTarefaNaTela(novaTarefa)

    document.querySelector('input').value = ""
}

function deletarTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id)

    if (index !== -1) {
        tarefas.splice(index, 1)
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector("ul").innerHTML = ""
    tarefas.forEach(tarefa => criarTarefaNaTela(tarefa))

}