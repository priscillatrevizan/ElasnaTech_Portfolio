$(document).ready(function () {
    // Inicialize o carousel com 'data-bs-ride="false"' para desativar a mudança automática
    $('.carousel').carousel({
        interval: false // Garante que a mudança automática está desativada
    });

    // Adicionar evento de clique para o botão anterior
    $('.carousel-control-prev').click(function () {
        $('.carousel').carousel('prev'); // Muda para o slide anterior
    });

    // Adicionar evento de clique para o botão próximo
    $('.carousel-control-next').click(function () {
        $('.carousel').carousel('next'); // Muda para o próximo slide
    });
});
