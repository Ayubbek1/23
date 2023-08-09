const btn = document.querySelector("#q")
const btn2 = document.querySelector("#w")
const btn3 = document.querySelector("#z")
const btn4 = document.querySelector("#x")
let phone = document.querySelector("#e")
let color = document.querySelector("#f")
let info = document.querySelectorAll(".info button")
let click = "color"
btn.onclick = ()=>{
    phone.setAttribute("src","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")
    color.textContent = "color-pink"
    click = "color-pink"
}
btn2.onclick = ()=>{
    phone.setAttribute("src","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")
    color.textContent = "color-black"
    click = "color-black"
}
btn3.onclick = ()=>{
    phone.setAttribute("src","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")
    color.textContent = "color-white"
    click = "color-white"
    
}
btn4.onclick = ()=>{
    phone.setAttribute("src","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")
    color.textContent = "color-yellow"
    click = "color-yellow"
}
console.log(color);

info.forEach(btn =>{
    // btn.onmouseenter = () =>{
    //     color.textContent = "color-"+window.getComputedStyle(btn).getPropertyValue("background").slice(0,17)
    //     console.log();
    // }
    btn.onmouseleave = () =>{
        color.textContent = click
        console.log();
    }
})
btn.onmouseenter = ()=>{
    color.textContent = "color-pink"
}
btn2.onmouseenter = ()=>{
    color.textContent = "color-black"
}
btn3.onmouseenter = ()=>{
    color.textContent = "color-white"
    
}
btn4.onmouseenter = ()=>{
    color.textContent = "color-yellow"

}