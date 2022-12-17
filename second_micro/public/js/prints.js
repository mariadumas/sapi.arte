window.addEventListener('DOMContentLoaded', (event) => {

    
        let cuadradaSmall = document.querySelector(".cuadrada-small");
        let cuadradaMedium = document.querySelector(".cuadrada-medium");
        let rectangularSmall = document.querySelector(".rectangular-small");
        let rectangularMedium = document.querySelector(".rectangular-medium");
        let price = document.querySelector(".price")
 


    cuadradaSmall.addEventListener("click", function () {
        price.innerText = "$5000 sin marco | $8000 con marco"
    })
    cuadradaMedium.addEventListener("click", function () {
        price.innerText = "$8000 sin marco | $13 800 con marco" 
    })

    rectangularSmall.addEventListener("click", function () {
        price.innerText = "$6000 sin marco | $11 000 con marco"
    })
    rectangularMedium.addEventListener("click", function () {
        price.innerText = "$9000 sin marco | $16 800 con marco"
    })





})