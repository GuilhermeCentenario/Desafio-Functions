let results = subRankeds(10, 11)
function subRankeds (wins,defeats){
    let win = wins - defeats
    return win
}


if (results < 10){
    console.log("O Herói tem de saldo de " + results + " Vitórias" + " e está no nível de Ferro")
}else if(results){
    
}