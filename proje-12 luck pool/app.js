var tagsEl   = document.getElementById("tags");
var textarea = document.getElementById("textarea");
textarea.addEventListener("keyup",(e) =>{
    createTags(e.target.value);

    if(e.key === "Enter"){
        setTimeout(() => {
            e.target.value =""
        }, 10);
        randomselect();
    }
})

function createTags(input){
    var tags = input.split(",").filter((tag)=>tag.trim() !== "").map((tag)=> tag.trim())
    tagsEl.innerHTML=""
    tags.forEach((tag) => {
        var tagel=document.createElement("span");
        tagel.classList.add("tag");
        tagel.innerHTML= tag;
        tagsEl.appendChild(tagel);
    });
}
function randomselect(){
    
    var interval = setInterval(()=>{
        var randomtag = pickrandomtag()
        highlighttag(randomtag);
        setTimeout(() => {
            unhighlighttag(randomtag)
        }, 100);
    },100)
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            var randomtag = pickrandomtag()
            highlighttag(randomtag);

        }, 100);
    }, 3000 );

}
function pickrandomtag(){
    var tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlighttag(tagEl) {
    tagEl.classList.add("highlight");
  }
  
  function unhighlighttag(tagEl) {
    tagEl.classList.remove("highlight");
  }
  