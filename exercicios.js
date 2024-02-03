// imc: peso/altura^2
listaGenerica = [];
linguagensDeProgramacao = [];

function IMC(pes, altur) {
    return pes / (altur * altur);
}

function fatorial(numero) {
    let cont = 1;
    while (numero > 1) {
        cont = cont * numero;
        numero = numero - 1;
    } return cont;
}

function ConversorDeDolarParaReal(dolar) {
    cotacao = 4.80;
    return dolar * cotacao;
}

function AreaePerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    return console.log(`Área:${area}m2, Perímetro:${perimetro}m`);
}

function AreaePerimetroDaCircunferencia(raio) {
    let compCirc = 2 * raio * 3.14;
    let areaCirc = 3.14 * (raio * raio);
    return console.log(`Área circ:${areaCirc}m2, Perímetro circ:${compCirc}m`);
}

function tabuada(numero) {
    let multiplicacao = 1;
    let resultado = numero;
    while (multiplicacao <= 10) {
        console.log(`${numero} * ${multiplicacao} = ${resultado}`);
        multiplicacao++;
        resultado = resultado + numero;
    }
}

linguagensDeProgramacao.push('JavaScript', 'C', 'C++', 'Kotlin', 'Python');
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
listaGenerica.push('Irineu', 'José', 'Cachaço');
console.clear();
console.log(listaGenerica[listaGenerica.length - 1]);




