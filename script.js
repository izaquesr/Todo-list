const tarefas = []

function adicionarTarefa() {
    let input = document.querySelector("input").value

    if (input === "") {
        alert("Nenhuma tarefa foi adicionada")
        return
    } else {
        tarefas.push(input)
    }
    


    let li = document.createElement("li")
    li.innerHTML = '<input type="checkbox" class="checkbox" id="tarefa-feita">' + input + '<span onclick="deletarTarefa(this)">✕</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector('input').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
}