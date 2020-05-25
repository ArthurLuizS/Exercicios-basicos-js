function calcular(){
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('tabuada')
    var valor = Number(num.value)
    tab.innerHTML= ''
    for(let c=1; c<=10; c++){
        let a = valor * c
        tab.innerHTML += (`<option> ${valor} x ${c} =  ${a}</option>`)
        
    }
}