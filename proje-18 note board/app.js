var addbtn = document.getElementById("add");
addbtn.addEventListener("click", () => addnewnote());
function addnewnote(text = ""){
    var note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ` 
        <img src="pin.png" alt="pin">
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete"><i class="fa-solid fa-eraser"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class = "${text ? "hidden" : ""}"></textarea> `
    var deletebtn = note.querySelector(".delete");
    deletebtn.addEventListener("click" , () =>{
        note.remove()
    })
    var editbtn = note.querySelector(".edit");
    var main = note.querySelector(".main");
    var textArea = note.querySelector("textarea");
    editbtn.addEventListener("click" , () =>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })
    textArea.value = text;
    main.innerHTML = marked(text);
    textArea.addEventListener("input" , (e) =>{
    var {value} = e.target;
    main.innerHTML = marked(value);
    updateLS()
    })
    document.body.appendChild(note);
}

function updateLS(){
    var notestext = document.querySelectorAll("textarea");
    const notes =[]
    notestext.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes" , JSON.stringify(notes))
}

var notes = JSON.parse(localStorage.getItem("notes"));

if (notes){
    notes.forEach((note) => addnewnote(note));
}