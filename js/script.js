function abrir_menu() {
    var options = document.getElementById('menu-options');

    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
        document.body.addEventListener('click', fechar_menu_fora);
    } else {
        options.style.display = 'none';
        document.body.removeEventListener('click', fechar_menu_fora);
    }
}

function fechar_menu_fora(event) {
    var options = document.getElementById('menu-options');
    var menuButton = document.getElementById('menu-button');

    // Se o clique não foi dentro do menu ou no botão de menu, feche o menu
    if (!options.contains(event.target) && event.target !== menuButton) {
        options.style.display = 'none';
        document.body.removeEventListener('click', fechar_menu_fora);
    }
}


// scroll reveal

window.sr = ScrollReveal({reset: true})

sr.reveal('.titulo1', {
    duration: 2000,
    rotate: {y:1000}
})
sr.reveal('.titulo2', {
    duration: 2000,
    rotate: {y:1000}
})
sr.reveal('.titulo3', {
    duration: 2000,
    rotate: {y:1000}
})
sr.reveal('.titulo4', {
    duration: 2000,
    rotate: {y:1000}
})

// Navegação na página

// $(document).ready(function() {
//     $('a[href^="#"]').on('click', function(event) {
//       event.preventDefault();

//       var target = this.hash;
//       var $target = $(target);

//       $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//       }, 900, 'swing', function() {
//         window.location.hash = target;
//         fechar_menu();
//       });
//     });
//     $('.link').on('click', function() {
//         fechar_menu();
//     });
// });

// Navegação na página
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;

            // Fechar o menu ao clicar em um item
            fechar_menu();
        });
    });
    $('.link').on('click', function() {
        fechar_menu();
    });
});

