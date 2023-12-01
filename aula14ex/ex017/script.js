
function contar() {
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passos = document.getElementById('passos')
var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = `Impossível contar`

    }else {
        res.innerHTML = `Contando: <br>`
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passos = Number(passos.value)
        if (passos <= 0){
            window.alert(`Passo inválido, considerando Passo 1`)
            passos = 1
        }

        if(inicio < fim) {
            //contagem crescente
            for(var c = inicio; c <= fim; c+= passos) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
            //contagem regressiva
        }else {
            for(var c = inicio; c >= fim; c -= passos)
                res.innerHTML += ` ${c} \u{1F449} `
        }
            res.innerHTML += `\u{1f3c1}`
        

    }
}