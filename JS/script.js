let km = prompt ('Inserisci quanti km vuoi percorrere')
console.log(km)

let age = prompt ('Inserisci la tua età')
console.log(age)

let prize = (0.21 * km)
console.log(prize)

prizefinal= prize

if (age < 18){
    prizefinal= (prize * 20 / 100)
    console.log(prizefinal)
}else if (age > 65){
    prizefinal= (prize * 40 / 100)
    console.log(prizefinal)
}else{
    prizefinal = prize
}
