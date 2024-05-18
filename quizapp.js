
//iniitializing quiz question
const quizData = [
    {
        question: "Full form of HTML?",
        options: [
            "sjkah",
            "Hyper language text",
            "Hyper text markup language",
            "None",
        ],
        correct: 2,
    },
    {
        question: "Full forma of XML?",
        options: [
            "Extensible Markup Language",
            "Hyper language text",
            "Hyper text markup language",
            "None",
        ],
        correct: 0,
    },
    {
        question: "Full forma of CSS?",
        options: [
            "Hyper language text",
            "Hyper text markup language",
            "Cascading Style Sheets",
            "None",
        ],
        correct: 2,
    }
]

//step2 
const quiz = document.querySelector('#quiz');
const answerEle = document.querySelectorAll(".ans");
const [questionele, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, #option-1, .option-2, .option-3, .option-4 "
    );

const submitbtn = document.querySelector("#submit");
let currQuizz = 0;
let score = 0;

//step3

deSelectAns = () => {
    answerEle.forEach((currentele)=>currentele.checked = false);
}

loadQuizz = () => {
    const { question, options } = quizData[currQuizz];
    // console.log(options);

    questionele.innerHTML = question;
    options.forEach((curOption, index) => {
        window[`option-${index+1}`].innerHTML = curOption;
    });
};

loadQuizz();

//step4

const getSelectedOption = ()=>{
    let answearElement = Array.from(answerEle);
    return answearElement.findIndex((currentele)=> currentele.checked);
};

submitbtn.addEventListener("click", ()=>{
    const selectOptionIndex = getSelectedOption();
    console.log(selectOptionIndex);

    if(selectOptionIndex === quizData[currQuizz].correct){
        score++;
    }


    currQuizz++;
    if(currQuizz < quizData.length){
        deSelectAns();
        loadQuizz();
    }else{
        quiz.innerHTML=`
        <div class="result">
            <h2>Your Score is : ${score}/${quizData.length}</h2>
            <h3>Congratulations on completing the quiz!</h3>
            <button class ="reload_button" onclick= "location.reload()">Play Again</button>
        </div>
    `;
    }

});