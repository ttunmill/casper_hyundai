let gnb = document.querySelector(".gnb")
let nav_whith_bg = document.querySelector(".nav_whith_bg")
let lnb = document.querySelectorAll(".lnb")
gnb.addEventListener("mouseover", ()=> {
    nav_whith_bg.style.display = "block"
    for(var i=0; i<lnb.length; i++) {
        lnb[i].style.display = "block"
    }
    
})
nav_whith_bg.addEventListener("mouseout", ()=> {
    nav_whith_bg.style.display = "none"
    for(var i=0; i<lnb.length; i++) {
        lnb[i].style.display = "none"
    }
})