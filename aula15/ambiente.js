let num = [0, 9, 44, 5, 6]
console.log(num)
num.sort()
console.log(num)

/*for(let c=0; c < num.length; c++ ){
    console.log(`posição ${c} tem ${num[c]}`)
}*/
for(let c in num){
    console.log(`posição${c} tem ${num[c]}`)
}