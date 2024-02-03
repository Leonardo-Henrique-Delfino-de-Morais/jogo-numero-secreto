let listaNumeroSecretoSorteado = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = gna();

function gna() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSecretoSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSecretoSorteado = [];
    }
    if (listaNumeroSecretoSorteado.includes(numeroEscolhido)) {
        return gna();
    }
    listaNumeroSecretoSorteado.push(numeroEscolhido);
    console.log(listaNumeroSecretoSorteado);
    return numeroEscolhido;
}

function mudarTextoMostrarNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function TituloeParagrafo() {
    mudarTextoMostrarNaTela('h1', 'Jogo do número secreto');
    mudarTextoMostrarNaTela('p', 'Digite um número de 1 a 10');
}

TituloeParagrafo();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        mudarTextoMostrarNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTela = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`
        //html não espera receber template string, mas sim Number, String, Variavel
        mudarTextoMostrarNaTela('p', mensagemTela);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            mudarTextoMostrarNaTela('p', 'o número secreto é menor');
        } else {
            mudarTextoMostrarNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gna();
    tentativas = 1;
    TituloeParagrafo();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}