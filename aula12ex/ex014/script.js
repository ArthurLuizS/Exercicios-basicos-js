function carregar(){
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    msg.innerHTML = (`As horas são: ${hora}`)

    if (hora > 0 && hora < 12){
        foto.src='manha.png'
        document.body.style.background = 'rgb(189, 189, 233)'
    } else if (hora >=12 && hora <18){
        foto.src='tarde.png'
        document.body.style.background = 'rgb(243, 243, 131)'
        
    } else{
        Image.src='noite.png'
        document.body.style.background = 'rgb(48, 30, 30)'
    }
}

