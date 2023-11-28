
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas.<br> Bom dia! `
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#f8e0c3'

    }else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas.<br> Boa tarde! `
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#f4a756'
    }else {
        msg.innerHTML = `Agora são ${hora} horas.<br> Boa noite! `
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#61476f'
    }

}
