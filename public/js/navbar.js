window.addEventListener('DOMContentLoaded', (event)=>{
    const icono = document.querySelector(".icon");
    const navlinks = document.querySelector(".navlinks");

    icono.addEventListener("click", function(e){
        if(navlinks.style.display==="block"){
            navlinks.style.display="none";
        }else{
            navlinks.style.display="block";
        }
        
    })

    
    })