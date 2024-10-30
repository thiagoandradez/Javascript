function mudar() {

}


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO - DADOS INCORRETOS TENTE NOVAMENTE! ')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebepequeno.png')
                genero = 'Bebe'
            }
            else if(idade >=10 && idade < 21) {
                img.setAttribute('src', 'jovempequeno.png')
                genero = 'Jovem '
            }
            else if(idade < 50) {
                img.setAttribute('src','adultohomempequeno.png')
                genero = 'Homem adulto'
            }
            else {
                img.setAttribute('src', 'idosopequeno.png')
                genero = 'Homem idoso'
            }
        } else if(fsex[1].checked) {
            genero= 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebepequeno.png')
                genero = 'Bebe'
            }
            else if(idade >=10 && idade < 21) {
                img.setAttribute('src', 'jovemmulherpequeno.png')
                genero = 'Jovem'
            }
            else if(idade < 50) {
                img.setAttribute('src', 'adultomulherpequeno.png')
                genero = 'Mulher Adulta'

            }
            else {
                img.setAttribute('src','idosapequeno.png')
                genero = 'Idosa mulher'
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
    
}