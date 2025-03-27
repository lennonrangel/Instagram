let imagens = document.querySelectorAll('.img');
let imagemAtual = 0;

function trocaImagem() {
    imagens[imagemAtual].style.opacity = 0;
    imagemAtual = (imagemAtual + 1) % imagens.length;
    imagens[imagemAtual].style.opacity = 1;
}

function inicializarImagens() {
    imagens.forEach((img, index) => {
        img.style.opacity = index === 0 ? 1 : 0;
    });
}

inicializarImagens();
setInterval(trocaImagem, 4000);