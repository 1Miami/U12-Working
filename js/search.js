var banners = ["./img/roxo.jfif", "./img/mimis.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    document.querySelector('.banner-img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 2000);
var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.classList.contains('pause')) {
        clearInterval(timer);
        controle.classList.remove('pause');
        controle.classList.add('play');
        controle.style.color = 'red';
    } else {
        timer = setInterval(trocaBanner, 2000);
        controle.classList.remove('play');
        controle.classList.add('pause');
        controle.style.color = 'blue';
    }
    return false;
};
