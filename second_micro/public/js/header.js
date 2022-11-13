window.addEventListener('DOMContentLoaded', (event) => {
  
  const iconoMenu = document.querySelector("#icono-menu");
  const menu = document.querySelector("#menu");
  const icono = document.querySelector("i");

  const links = document.querySelectorAll("li")



  // icono.addEventListener("mouseover", function (e){
  //   icono.style.color = "red"
  // })


  iconoMenu.addEventListener('click', function (e) {
    // estilos para el menu y body
    menu.classList.toggle('active-nav');
    document.body.classList.toggle('opacity');
    // Alternar atributo SRC icono del menu
    icono.classList.toggle('color-menu');

  })

links.forEach(function(link){
  link.addEventListener('click', function (e) {
    menu.classList.toggle('active-nav');
    document.body.classList.toggle('opacity');
    // Alternar atributo SRC icono del menu
    icono.classList.toggle('color-menu');

  })


})




})