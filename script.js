function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] tente novamente')} 
        else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    res.innerHTML = `Idade Calculada: ${idade}`
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        gênero = 'ser'
        if (idade >=0 && idade <10){
            //Criança
            img.setAttribute('src','assets/fotosuricate.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src','assets/fotopreguica.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','assets/fotourso.png')
        }else {
            //idoso
            img.setAttribute('src','assets/fototartaruga.png')
        }
    } else if (fsex[1].checked){
        gênero = 'ser'
        if (idade >=0 && idade <10){
            //Criança
            img.setAttribute('src','assets/fotosuricate.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src','assets/fotopreguica.png')
        }else if (idade < 50){
            //adulta
            img.setAttribute('src','assets/fotogirafa.png')
        } else {
            //idosa 
            img.setAttribute('src','assets/fototartaruga.png')
        }
    }
    res.style.textAlign = 'lefth'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    

}
}
