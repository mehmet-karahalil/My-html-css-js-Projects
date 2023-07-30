var content = document.getElementById("content");
var speedel = document.getElementById("speed");
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur eleifend elit placerat fermentum. Pellentesque.";
var idx = 1;
var speed = 300/ speedel.value;
writetext()
function writetext() {
    content.innerText = text.slice(0, idx);
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writetext, speed)
}
function writeText() {
    content.innerText = text.slice(0, idx)
    idx++
  
    if (idx > text.length) {
      idx = 1
    }
  
    setTimeout(writeText, speed)
}

speedel.addEventListener("input" , (e) => (speed = 300 / e.target.value))