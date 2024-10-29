function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minuto}  minutos.`
    if (hora >= 0 && hora < 12) {
        img.src= "diapequeno.png"
        document.body.style.background= '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src="tardepequeno.png"
        document.body.style.background= '#b9846f'
    }
    else {
        img.src= "noitepequena.png"
        document.body.style.background='#515154'
    }
}

