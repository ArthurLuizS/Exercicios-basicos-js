function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value > ano || fano.value.length ==0){
        window.alert('[ERROR] Verifique os Dados e tente novamente!')
    } else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <=12){
            //crianca
            img.setAttribute('src','foto-bebe-m.png')
            }else if (idade < 21){
                //shounem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else{
            genero='Mulher'
            if(idade >=0 && idade <=12){
                //crianca
                img.setAttribute('src','foto-bebe-f.png')
                }else if (idade < 21){
                    //shounem
                    img.setAttribute('src','foto-jovem-f.png')
                }else if(idade<50){
                    //adulto
                    img.setAttribute('src','foto-adulto-f.png')
                }else{
                    //idoso
                    img.setAttribute('src','foto-idoso-f.png')
                }
        }
        res.style.textAlign= 'center'
        res.innerHTML=(`Checamos que é ${genero} com a idadede ${idade} anos`)
        res.appendChild(img)
    }
}