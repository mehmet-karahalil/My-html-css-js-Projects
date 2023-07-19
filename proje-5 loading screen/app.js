var loadText = document.querySelector(".loading-text");
var bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurlama, 20)
function blurlama(){
    load++

    if (load > 99) {
      clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}