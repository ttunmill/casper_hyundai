let gnb = document.querySelectorAll(".gnb > li")
let nav_whith_bg = document.querySelector(".nav_whith_bg")
let lnb = document.querySelectorAll(".lnb")
/* gnb.addEventListener("mouseover", ()=> {
    nav_whith_bg.style.display = "block"
    for(var i=0; i<lnb.length; i++) {
        lnb[i].style.display = "block"
    }
    
}) */
for(var i of lnb) {i.style.height = "0px"}
gnb.forEach((i, j) => {
    i.addEventListener("mouseover", () => {
        nav_whith_bg.style.height = "240px"
        for(var i of lnb) {i.style.height = "225px"}
    })
    nav_whith_bg.addEventListener("mouseout", () => {
        nav_whith_bg.style.height = "0px"
        for(var i of lnb) {i.style.height = "0px"}
    })
    lnb[j].addEventListener("mouseout", () => {
        nav_whith_bg.style.height = "0px"
        for(var i of lnb) {i.style.height = "0px"}
    })
})


/* nav_whith_bg.addEventListener("mouseout", ()=> {
    
    for(var i=0; i<lnb.length; i++) {
        lnb[i].style.display = "none"
    }
})
 */

//참고용
/* gnb.forEach((obj, ind)=> {
    obj.addEventListener("mouseover", () => {
        subHide()
        sub[ind].style.display = "block"
    })
    obj.addEventListener("mouseout", () => {subHide()})
}) */