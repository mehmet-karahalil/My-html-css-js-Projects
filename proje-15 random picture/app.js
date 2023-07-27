var container = document.querySelector(".container");
var unsplashURL = "https://picsum.photos/";
var rows = 9;
for (let index = 0; index < rows*3; index++) {
    var image = document.createElement("img");
    image.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(image);   
}
function getrandomnumber() {
    var randomNumber = Math.floor(Math.random() * 999) + 1;
    return randomNumber
}
function getRandomSize() {
    return `${getrandomnumber()}/${300}`
}