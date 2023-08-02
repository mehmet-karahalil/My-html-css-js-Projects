const quizData = [
    {
        question: 'En sevdiğim hayvan?',
        a: 'İnek',
        b: 'At',
        c: 'Deve',
        d: 'Kurt',
        e: 'Kedi',
        correct: 'a',
    },
    {
        question: 'En sevdiğim oyun?',
        a: 'Witcher',
        b: 'Elden Ring',
        c: "Baldur's Gate",
        d: 'Satisfactory',
        e: 'League of Legends',
        correct: 'b',
    },
    {
        question: 'En sevdiğim renk?',
        a: 'Mavi',
        b: 'Yeşil',
        c: 'Sarı',
        d: 'Siyah',
        e: 'Kırmızı',
        correct: 'd',
    },
    {
        question: 'En sevdiğim dizi?',
        a: 'Kurtlar Vadisi',
        b: 'Ezel',
        c: 'Leyla ile Mecnun',
        d: 'Eşkiya Dünyaya Hükümdar Olmaz',
        e: 'Suskunlar',
        correct: 'c',
    },
    {
        question: 'En sevdiğim anime?',
        a: 'full metal alchemists',
        b: 'one punch man',
        c: 'jujutsu kaisen',
        d: "hell's paradise",
        e: 'naruto',
        correct: 'e',
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
const submitBtn2 = document.getElementById("submit2")

var currentQuiz = 0
var score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

    submitBtn2.addEventListener("click", ()=>{
        submitBtn2.style.display = "none"
        submitBtn.style.display = "block"
    })



    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
            submitBtn2.style.display = "block"
            submitBtn.style.display = "none"
   if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score++

        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<div id="reloadbtn" >
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button> </div>
  
      `
        }
    }else{
        alert("seç birini!!!")
    }
})