function adicionarTarefa() {
    let input = document.querySelector("input").value

    if (input === "") {
        alert("Nenhuma tarefa foi adicionada")
        li.element.style.display = "none"
    }

    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector('input').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
}