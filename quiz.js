let questions = document.querySelectorAll(".question");
let submit = document.getElementById("quizSubmit");
let allQuestions = document.getElementById("allQuestions");
let rightQuestions = document.getElementById("rightQuestions");
let wrongQuestions = document.getElementById("wrongQuestions");
let percentQuestions = document.getElementById("percentQuestions");
let quizProgress = document.getElementById("quizProgress");
let result = document.querySelector(".result");

function checkQuiz () {
    let rightAnswer = 0;
    questions.forEach(ques => {
        ques.querySelectorAll("input[type=radio").forEach(elem => {
            elem.classList.remove("true","false","empty");
            if (elem.checked && elem.hasAttribute("answer")) {
                // right answer
                rightAnswer++;
                ques.classList.remove("true","false");
                ques.classList.add("true");
            }
            if(elem.hasAttribute("answer")) {
                // true
                elem.classList.add("true");
            } else if (elem.checked && !elem.hasAttribute("answer")) {
                // false
                elem.classList.add("false");
                ques.classList.remove("true","false");
                ques.classList.add("false");
            } else {
                // empty
                elem.classList.add("empty");
            }
        });
    });
  // result
    let quizPercent = Math.floor(rightAnswer/questions.length * 100);
    result.classList.add("is-active");
    allQuestions.innerHTML = "number of questions : " + questions.length;
    rightQuestions.innerHTML = "correct : " + rightAnswer;
    wrongQuestions.innerHTML = "wrong : " + (questions.length - rightAnswer);
    percentQuestions.innerHTML = "quiz percent : " + quizPercent + "%";
    quizProgress.classList.remove("success","fail");
    if (quizPercent > 75) {
      // success
        quizProgress.classList.add("success");
      alert("success");
    } else {
      // fail
        quizProgress.classList.add("fail");
      alert("fail");
    }
  quizProgress.value = quizPercent;
}


// 
submit.addEventListener("click", cl => {
  cl.preventDefault();
  checkQuiz();
  // scroll to bottom
  window.scrollTo(0,document.body.scrollHeight);
});