const notaValor = document.getElementById("notaValor");
const btnCalcUnd = document.getElementById("btnCalcUnd");
const btnCalcTotal = document.getElementById("btnCalcTotal");
const selectImposto = document.getElementById("imposto");
const impostoValor = [17.5, 7, 3.75, 4]

function calculoImposto(){
    const valorDoImposto = [];

    for(i = 0; i < impostoValor.length; i++) {
    const calculoImposto = notaValor.value * (impostoValor[i]/100);
    valorDoImposto.push(calculoImposto)
    }
    return valorDoImposto
}

function calculoTotalComImposto(){
    const valorTotalComImposto = [];
    const valorDoImposto = calculoImposto();

    for(i = 0; i < valorDoImposto.length; i++) {
    const totalComImposto = parseFloat(notaValor.value) + parseFloat(valorDoImposto[i]);
    valorTotalComImposto.push(totalComImposto)
    }
    return valorTotalComImposto
}

function impostoCalculoUnitario (){
    const imposto = selectImposto.options[selectImposto.selectedIndex].value;
    const valorDoImposto = calculoImposto()
    const valorTotalComImposto = calculoTotalComImposto()
    
    let i = -1

    switch(imposto){
        case "icms":
        i = 0
        break;
        case "ipi":
        i = 1
        break;
        case "pis":
        i = 2
        break;
        case "confins":
        i = 3
        break;
        default:
            window.alert("Erro - entre em contato com o suporte");
    }
    if(i !== -1){
        alert("R$" + valorDoImposto[i].toFixed(2) + " de imposto");
        alert("O valor total com imposto " + imposto.value + "é R$" + valorTotalComImposto[i].toFixed(2));
    }
    
}
function impostoCalculoTotal (){
    const valorDoImposto = calculoImposto()
    let somaDeImpostos = 0;


    for(i = 0; i < valorDoImposto.length; i++) {
        somaDeImpostos += parseFloat(valorDoImposto[i]); 

}
const valorTotalComImposto = parseFloat(notaValor.value) + somaDeImpostos;

alert("O valor total com toda os impostos é: R$" + valorTotalComImposto); 
}

btnCalcUnd.addEventListener("click", impostoCalculoUnitario)
btnCalcTotal.addEventListener("click", impostoCalculoTotal)



// fazer o calculoe mostra em um console 