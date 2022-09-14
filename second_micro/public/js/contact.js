const iconoMenu = document.querySelector("#icono-menu"),
    menu = document.querySelector("#menu"),
    icono= document.querySelector("i");

    iconoMenu.addEventListener('click', function(e) {
        // estilos para el menu y body
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');
        // Alternar atributo SRC icono del menu 
        icono.classList.toggle('color-menu');

      //  hambur.style.color="white";


    })