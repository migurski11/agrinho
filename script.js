const botao = document.getElementById("saibaMais");

botao.addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

function mostrarMensagem() {
    alert("Obrigado por apoiar um futuro sustentável! 🌱");
}

function animarContador(id, valorFinal, velocidade) {

    let valorAtual = 0;

    const elemento = document.getElementById(id);

    const incremento = Math.ceil(valorFinal / 100);

    const intervalo = setInterval(() => {

        valorAtual += incremento;

        if (valorAtual >= valorFinal) {
            valorAtual = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent =
            valorAtual.toLocaleString("pt-BR");

    }, velocidade);
}

window.addEventListener("load", () => {

    animarContador("arvores", 50000, 20);

    animarContador("agua", 1200000, 20);

    animarContador("producao", 8500, 25);

});