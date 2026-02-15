let results = subRankeds(101, 1)
let frase = ("O Herói tem de saldo de ")
function subRankeds (wins,defeats){
    let win = wins - defeats
    return win
}


if (results < 10){
    console.log(frase + results + " Vitórias" + " e está no nível de Ferro")
}else if(results>10 && results <= 20){
    console.log(frase + results + " Vitórias" + " e está no nível de Bronze")
}else if(results>20 && results <= 50){
    console.log(frase + results + " Vitórias" + " e está no nível de Prata")
}else if(results>50 && results <= 80){
    console.log(frase + results + " Vitórias" + " e está no nível de Ouro")
}else if(results>80 && results <= 90){
    console.log(frase + results + " Vitórias" + " e está no nível de Diamante")
}else if(results>90 && results <= 100){
    console.log(frase + results + " Vitórias" + " e está no nível de Lendário")
}else if(results >= 101){
    console.log(frase + results + " Vitórias" + " e está no nível de Imortal")
}