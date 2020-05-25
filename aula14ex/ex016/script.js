function contar(){
    var inic = window.document.getElementById('txtinic').value
    var fim = window.document.getElementById('txtfim').value
    var passo = window.document.getElementById('txtpasso').value
    var res = window.document.getElementById('res')
    
    
   if(inic == '' || fim == '' || passo == ''){
   
    
       window.alert('ERRO')
    } else {
        if (passo=='0'){
        alert('passo invalido, considerando passo 1')
        passo = '1'
        }
        res.innerHTML=('Contando...')
        var i = Number(inic)
        var f = Number(fim)
        var p = Number(passo)
        for (let c = i; c<=f; c+=p){
            res.innerHTML+=`${c} `
        } 

    }
   
    }
   
        
    
