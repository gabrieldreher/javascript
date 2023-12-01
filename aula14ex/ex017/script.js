
function contar() {
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passos = document.getElementById('passos')
var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = `Contando:`
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passos = Number(passos.value)

        if(inicio < fim) {
            for(var c = inicio; c <= fim; c+= passos) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
            res.innerHTML += `\u{1f3c1}`
        }else {
            
        }

        

    }
}