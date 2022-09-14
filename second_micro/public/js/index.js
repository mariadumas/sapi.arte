window.addEventListener('DOMContentLoaded', (event) => {

    let readmoreButton = document.querySelector(".btnMore")
    let moreText1 = document.querySelector(".more-text1")
    let moreText2 = document.querySelector(".more-text2")
    let readLessButton = document.querySelector(".btnLess")

    readmoreButton.addEventListener("click", function () {
        moreText1.style.display = "block"
        moreText2.style.display = "block"
        readmoreButton.style.display = "none"
        readLessButton.style.display = "block"
    })

    readLessButton.addEventListener("click", function () {
        moreText1.style.display = "none"
        moreText2.style.display = "none"
        readmoreButton.style.display = "block"
        readLessButton.style.display = "none"
    })


    const icono = document.querySelector(".icon");
    const navlinks = document.querySelector(".navlinks");

    icono.addEventListener("click", function (e) {
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
        } else {
            navlinks.style.display = "block";
        }

    })




})