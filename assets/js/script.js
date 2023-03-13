const quiz = document.getElementById('quiz'); // Quiz container
const questionEl = document.getElementById('question'); // Question
const choiceA = document.getElementById('a_text'); // A text element
const choiceB = document.getElementById('b_text'); // B text element
const choiceC = document.getElementById('c_text'); // C text element
const choiceD = document.getElementById('d_text'); // D text element
const answerEls = document.querySelectorAll(".answer"); // Radio choices
const submitButton = document.getElementById('submit'); // Submit button
const scoreEl = document.getElementById('score'); // Score tracker element
// 10 questions:
const quizData = [

    {question: 'Which of the following is NOT true?',
        a: 'Exponentiation operator was introduced in ES2016',
        b: 'Variables declared by "var" are only available inside the block where they’re defined.',
        c: '"const" does not define a constant value. It defines a constant reference to a value.',
        d: 'JavaScript and Java are different programming languages.',
        correct: 'b'},

    {question: 'Which of the following is NOT an html event?',
        a: 'onmouseout',
        b: 'onchange',
        c: 'onload',
        d: 'onhover',
        correct: 'd'},

    {question: 'The forEach() method executes a provided function once for each type of ___ element?',
        a: 'object',
        b: 'variable',
        c: 'array',
        d: 'function',
        correct: 'c'},

    {question: 'Which of the following is true between the map() and forEach() functions?',
        a: 'map() returns an array where forEach() returns undefined.',
        b: 'You can chain both map() and forEach() with other methods.',
        c: 'forEach is best used when you want to mutate the array.',
        d: 'map() is best used when you want to loop through an array.',
        correct: 'a'},

    {question: 'Which of the following is not a JavaScript Data Type?',
        a: 'Number',
        b: 'Boolean',
        c: 'Undefined',
        d: 'Unsigned',
        correct: 'd'},

    {question: 'Which of the following methods adds an element in the form of a DOMString?',
        a: 'restructure()',
        b: 'append()',
        c: 'appendChild()',
        d: 'pretend()',
        correct: 'b'},

    {question: 'setTimeout() allows you to do which of the following?',
        a: 'Run a function multiple times',
        b: 'Run a function once',
        c: 'Both a & b',
        d: 'None of the above',
        correct: 'b'},

    {question: 'How do you view an array in alphabetical order?',
        a: 'configure()',
        b: 'view()',
        c: 'filter()',
        d: 'sort()',
        correct: 'd'},

    {question: 'How do you add a new property to a constructor after it was created?',
        a: 'At the very top of the JavaScript document.',
        b: 'Constructor.property = "New property".',
        c: 'Where it was originally declared as a function.',
        d: 'You can no longer change it once it is created.',
        correct: 'c'},

    {question: 'Which of the following is not a built-in JavaScript Constructor?',
        a: 'Math()',
        b: 'RegExp()',
        c: 'Date()',
        d: 'String()',
        correct: 'a'}
];

let currentQuiz = 0; // Use this variable to increment the quizData array
let score = 0;


// Track Score:
scoreEl.innerHTML = `Score: ${score}/${quizData.length}`;


// Start Quiz Function:
function startQuiz() {

    deselectAnswers(); // Erases previous answers

    const currentQuizData = quizData[currentQuiz]; // Captures current quiz user is on based on quizData[0]

    questionEl.innerText = currentQuizData.question; // Writes current quiz question to HTML DOM
    // Choices:
    choiceA.innerText = currentQuizData.a;
    choiceB.innerText = currentQuizData.b;
    choiceC.innerText = currentQuizData.c;
    choiceD.innerText = currentQuizData.d;

}

// Get the user's multiple choice answer:
function getSelected() {
    let answer = undefined;
    answerEls.forEach(choice => {
        if (choice.checked) {
            answer = choice.id;
        }
    });

    return answer;
}

// Make sure all radio buttons are not selected at the beginning of each question:
function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}


// Timer
const timerEl = document.getElementById('timer');
let duration = 300; // duration of countdown in seconds (5 minutes)

let timer = setInterval(() => {

    duration--; // Countdown goes down by 1 every 1000 milisecond
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    timerEl.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (duration <= 0) {
        clearInterval(timer); // Stops timer at 0
        alert("Time's up!"); // Message should appear that the game is over
    }
}, 1000);




// Calls to start the quiz now
startQuiz();




// Checks to see if answer is correct:
    submitButton.addEventListener('click', ()=>{

        const answer = getSelected();

        if (answer) {
                        if (answer === quizData[currentQuiz].correct) {
                            alert('Correct!');
                            score++; // Add +1 to score
                            scoreEl.innerHTML = `Score: ${score}/${quizData.length}`; // Show the new score
                        } else {
                            alert('Wrong');
                            duration = duration -30; // Subtract 30 seconds from score when wrong
                        }

                        currentQuiz++; // Move to the next question in the array

                        if (currentQuiz < quizData.length) {
                            startQuiz(); // Keep going if there are still more questions
                        } else {
                            clearInterval(timer);
                            { quiz.innerHTML=` <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                                                    <br><center><ul><li id="high-score"></li></center></ul>
                                                <br><center>Save your high score below.</center><br> <button onclick="saveScore()">Save</button>
                                                

`;

                            }
                        }
                    }

    });


    function saveScore() {
         let name = prompt('What are your initials?'); // Gets the user's name
         let jsList = document.getElementById('high-score'); // hooks onto the <li> element
         jsList.innerHTML = `${name} : ${score}/${quizData.length}`; // Writes both the name and score

         return jsList;
    }





// Responsible for creating HTML DOM after user clicks on save
// function createEl () {
//
//     const body = document.body; // <body>
//     const jsDiv = document.createElement('div'); // <div>
//     const jsOl = document.createElement('span'); // <ol>
//     jsOl.setAttribute('id', 'score-list');
//     jsDiv.setAttribute('id', 'high-scores'); // <div id="high-scores">
//     jsOl.textContent = `${saveScore()}`; // <ol>Score</ol>
//     jsOl.setAttribute('color', '#FFF'); // Makes <ol> white
//     jsDiv.appendChild(jsOl); // ADD <div id="high-scores"><ol id='score-list'></ol></div>
//     body.appendChild(jsDiv); // ADD <body><div id="high-scores"></div>
// }