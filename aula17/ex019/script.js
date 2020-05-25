var vetor = []
var c = 0
var res = document.createElement('p')


function adicionar(){
var exist
let txtnum = window.document.getElementById('txtnum')
var num = Number(txtnum.value)
let list =window.document.getElementById('lits')
let item = document.createElement('option')
res.innerText = ''

/**/

 if(txtnum.value == '' ){
    alert('Digite um valor para adicionar')
    exist = 1
}else if (num<0 || num>100){
   alert('Número não atende requisito')
   exist = 1
} 
else if(vetor.length > 0) {
    
    for(let a=0; vetor.length>=a; a++){
        if(num == vetor[a]){
            exist = 1
            alert('O valor éinvalido ou ja encontrado na lista')
            
        }    
    
}
}
if (exist !=1 ){
    vetor.push(num)
    
    item.text=(`vetor: ${vetor[c]}`)
    c++
    list.appendChild(item)
    txtnum.value = ''
    txtnum.focus()
}   
}
function calcular(){

var div = window.document.getElementById('res')
res.innerText = 'teste'
div.appendChild(res)
/*var todo = window.document.getElementById('aotodo')
var maior = window.document.getElementById('maior')
var menor = window.document.getElementById('menor')
var soma = window.document.getElementById('soma')
var media = window.document.getElementById('media') */
var som = 0
vetor.sort(function(a,b){
    return a - b;
})
for(let b = 0; b < vetor.length ; b++){
    som += vetor[b]
}
res.innerHTML += `<p>ao todo ${vetor.length}</p>`
res.innerHTML+= `<p>o menor e ${vetor[0]}</p>`
res.innerHTML+=`<p> o maior é: ${vetor[c-1]}</p>`
res.innerHTML+=`<p>A soma de todos os valores é: ${som}</p>`
res.innerHTML+=`<p>A media do vetor é: ${som/vetor.length}</p>`
/*todo.innerText = `Ao todo temos ${vetor.length}`
menor.innerText = `O menor é ${vetor[0]}`
maior.innerText = `O maior é ${vetor[c-1]}`
soma.innerText =`a Soma de todos os valores é: ${som}`
media.innerText = `A media é ${som/vetor.length}`*/
}