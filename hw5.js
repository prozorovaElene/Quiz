const quizInfo = [
    {
        question: "Where the word 'psychology' does come from?",
        a: "Italian",
        b: "Greek",
        c: "Latin",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Psychology is said to be the scientific study of ___ and ____.",
        a: "Behavior, mental processes",
        b: "Mental illness, Mental health",
        c: "Physical states, mental states",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Who is the father of Experimental psychology?",
        a: "Wilhelm Wundt",
        b: "G. Jung",
        c: "Sigmund Freud",
        d: "None of the above",
        correct: "a",        
    },
    {
        question: "Psychophysics is a study of -",
        a: "Perception illness",
        b: "Movement perception",
        c: "Psychological perception or physical stimuli",
        d: "None of the above",
        correct: "c",        
    },
];

const quiz= document.getElementById('container')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizInfoquizInfo = quizInfo[currentQuiz]
    questionEl.innerText = currentQuizInfoquizInfo.question
    a_text.innerText = currentQuizInfoquizInfo.a
    b_text.innerText = currentQuizInfoquizInfo.b
    c_text.innerText = currentQuizInfoquizInfo.c
    d_text.innerText = currentQuizInfoquizInfo.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizInfo[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizInfo.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
           <button onclick="location.reload()" style="margin-top: 0px">Reload</button>
           `
       }
    }
})