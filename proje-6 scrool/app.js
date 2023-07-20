var boxes = document.querySelectorAll('.container .box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
  const triggerBottom = (window.innerHeight / 6) *4
  boxes.forEach((box) => {
    var boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
} 
checkBoxes()