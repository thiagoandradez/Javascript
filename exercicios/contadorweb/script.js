function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length = 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro - faltam dados')
        res.innerHTML = 'Impossivel contar!'
    } else {
       res.innerHTML = 'Contando : '
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (i < f){
        for (var c = i; c <= f ; c += p) {
            res.innerHTML += `</br> </br>\u{1F449}  ${c} </br>`
           }
       
       res.innerHTML += `</br> </br>\u{1F449}\u{1F3C1}`
    } else {
        for (var c = i; c >=f ; c-= p) {
            res.innerHTML += ` ${c}\u{1F449} `
        }
        
    }
    res.innerHTML += `\u{1F3C1}`
    }
}