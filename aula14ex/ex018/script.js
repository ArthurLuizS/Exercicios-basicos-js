function calcular(){
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('tabuada')
    var valor = Number(num.value)
    if (num == ''){
        window.alert('erro')
    } else{
    tab.innerHTML= ''
    for(let c=1; c<=10; c++){
        let item = document.createElement('option')
        item.text= (`${valor} x ${c} = ${valor*c}`)
        tab.appendChild(item)
        
    }
        
    }
}