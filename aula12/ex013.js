var agora = new Date()

var diaSem = agora.getDay()
//var diaSem = 3
/*
0= Domingo
1=Seg
2=Terc
3=Quar
4=Quin
5=Sex
6=Sab */
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}