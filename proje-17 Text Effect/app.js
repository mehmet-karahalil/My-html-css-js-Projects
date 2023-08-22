var content = document.getElementById("content");
var speedel = document.getElementById("speed");
var textQueue = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur eleifend elit placerat fermentum. Pellentesque.",
    "A different text to be typed.",
    "Yet another text for typing."
];
var currentTextIndex = 0;
var idx = 0;
var isDeleting = false;
var speed = 300 / speedel.value;
writetext();

function writetext() {
    var currentText = textQueue[currentTextIndex];
    
    if (isDeleting) {
        currentText = currentText.slice(0, idx);
        idx--;
    } else {
        currentText = currentText.slice(0, idx + 1);
        idx++;
    }

    content.innerText = currentText;

    if (idx > currentText.length) {
        isDeleting = true;
    }

    if (idx < 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textQueue.length; // Sonraki metni seç
    }

    setTimeout(writetext, isDeleting ? speed / 2 : speed);
}

speedel.addEventListener("input", (e) => {
    speed = 300 / e.target.value;
});
