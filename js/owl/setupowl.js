$('.owl-carousel').owlCarousel({
    // efeito de loop
    loop:true,
    // margin entre as imagens
    margin:10,
    // botoes de navegacao
    nav:false,
    // tela pequena 1 item, 600px 3 itens, 1000px 5 itens por tela
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})