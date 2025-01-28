
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;
btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length -1) return;
    esconderCartaoSelecionado();
cartaoAtual++;
    mostarCartao(cartaoAtual);
})


btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
cartaoAtual--;
mostarCartao(cartaoAtual);
})

function mostarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
