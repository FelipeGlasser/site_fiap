console.log("calcular...")

//manipulação do DOM 

//let = local
//var = global
//const = constante

document.querySelector("#qtde").addEventListener("change", calcular)
document.querySelector("#servico").addEventListener("change", calcular)
document.querySelector("#engenheiro_sim").addEventListener("change", calcular)
document.querySelector("#engenheiro_nao").addEventListener("change", calcular)

function calcular(){
    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 1000

    const tipo = document.querySelector("#servico").value
    if (tipo == 2) preco += 1000

    const temEngenheiro = document.querySelector("#engenheiro_sim").checked
    if (temEngenheiro) preco *= 1.1

    console.log (preco)

    document.querySelector("#servico").innertext = "R$" + preco.toFixed(2)

}

