let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto)
let tentativa = 1

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMesagemInicial() {
textoNaTela('h1','Jogo do Número secreto');
textoNaTela('p','Escolha um número entre 1 a 10');
}

exibirMesagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value

    let palavraTentativa =  tentativa > 1 ? 'tentativas' : 'tentativa'

    let fraseTentativa = `O número secreto com ${tentativa} ${palavraTentativa}`

    if (chute == numeroSecreto){

        textoNaTela('h1','Acertou');
        textoNaTela('p',fraseTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            textoNaTela('p','O chute e maior que o número secreto');

        } else {

            if (chute < numeroSecreto) {
                textoNaTela('p','O chute e menor que o número secreto');
                textoNaTela('h1',"");
            }
        }
        tentativa++;
        limparcampo();
    } 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido) ) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = ''
}
function reiniciarJogo() {
    gerarNumeroAleatorio()
    limparcampo();
    tentativa = 1;
    exibirMesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
