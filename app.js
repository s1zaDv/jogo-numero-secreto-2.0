let listaDeNumerosGerados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoNaTela(`h1`, `Jogo do Número Secreto`);
  exibirTextoNaTela(`p`, `Escolha um número entre 1-100: `);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = listaDeNumerosGerados.length;

  if (quantidadeElementosNaLista == numeroLimite) {
    exibirTextoNaTela(`h1`, `Parabéns!`);
    exibirTextoNaTela(
      `p`,
      `Você zerou o jogo! Reinicie a página para jogar novamente`
    );
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
    listaDeNumerosGerados = [];
  }
  if (listaDeNumerosGerados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosGerados.push(numeroEscolhido);
    console.log(listaDeNumerosGerados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector(`input`);
  chute.value = ``;
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector(`input`).value;
  let resultadoTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela(
      `h1`,
      `Parabéns! Você acertou o número secreto com ${tentativas} ${resultadoTentativa}.`
    );
    exibirTextoNaTela(`p`, `Gostaria de jogar novamente?`);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela(
      `h1`,
      `O número secreto é menor que ${chute}. (${tentativas} ${resultadoTentativa}.)`
    );
    exibirTextoNaTela(`p`, `Por favor, tente novamente...`);
    tentativas++;
    limparCampo();
  } else if (chute < numeroSecreto) {
    exibirTextoNaTela(
      `h1`,
      `O número secreto é maior que ${chute}. (${tentativas} ${resultadoTentativa}.)`
    );
    exibirTextoNaTela(`p`, `Por favor, tente novamente...`);
    tentativas++;
    limparCampo();
  } else {
    exibirTextoNaTela(`h1`, `Algo deu errado...`);
    exibirTextoNaTela(`p`, `Insira um número interio por favor!`);
  }
}
