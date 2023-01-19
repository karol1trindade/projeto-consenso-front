function calcular() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = 0

    imc = peso / (altura * altura)

    let divContainer = document.getElementById("container-pai")

    let alerta = document.createElement("div")
    divContainer.appendChild(alerta)

    let resultado = document.createElement("p")

    alerta.appendChild(resultado)

    if (imc < 18.5) {
        alerta.className = "alert alert-danger"
        alerta.role = "alert"
        resultado.innerHTML = "Seu IMC é " + imc + "<br>Classificação: Magreza"
    } else if (imc >= 18.5 && imc < 25) {
        alerta.className = "alert alert-success"
        alerta.role = "alert"
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + "<br>Classificação: Normal"
    } else if (imc >= 25 && imc < 30) {
        alerta.className = "alert alert-warning"
        alerta.role = "alert"
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + "<br>Classificação: Sobrepeso"
    } else if (imc >= 30 && imc < 40) {
        alerta.className = "alert alert-danger"
        alerta.role = "alert"
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + "<br>Classificação: Obesidade"
    } else {
        alerta.className = "alert alert-danger"
        alerta.role = "alert"
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + "<br>Classificação: Obesidade grave"
    }
}

function limpar(){
    document.getElementById("peso").reset()
    document.getElementById("altura").reset()
}