[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Timed Coding Quiz

This is a timed coding quiz application implemented using JavaScript, HTML, and CSS. It presents the user with a series of multiple-choice questions and tracks their score as they progress through the quiz. The user has a limited time to complete the quiz, and for each wrong answer, a penalty of 30 seconds is deducted from the remaining time.

## Table of Contents

 • [How to Play](#how-to-play)

 • [Code Structure](#code-structure)

 • [Customization](#customization)

 • [Technologies Used](#technologies-used)

 • [Contributing](#contributing)

 • [Questions](#questions)

 • [License](#license)

## How to Play

1. Open the `index.html` file in a web browser to start the quiz.
2. Read the introductory message and click the "Start Quiz" button to begin.
3. A timer will start counting down from 5 minutes.
4. Each question will be presented with four choices (A, B, C, D).
5. Choose the correct answer by clicking the corresponding radio button.
6. Click the "Submit" button to submit your answer.
7. If the answer is correct, you will receive an alert stating "Correct!" and your score will be incremented.
8. If the answer is wrong, you will receive an alert stating "Wrong" and 30 seconds will be deducted from the remaining time.
9. The next question will automatically appear until all questions are answered or the time runs out.
10. Once the quiz is completed, a message will display your final score.
11. You will have the option to save your initials and score by clicking the "Save" button.
12. The saved initials and score will be displayed on the "View High Scores" page.

## Code Structure

+ `index.html`: This file contains the home page and the "Start Quiz" button to initiate the quiz.
+ `quiz.html`: This file contains the quiz questions, answer choices, timer, and the "Submit" button to progress through the quiz.
+ `assets/css/main.css`: This CSS file is responsible for styling the application.
+ `assets/js/script.js`: This JavaScript file contains the logic for the quiz, including handling user input, scoring, and the countdown timer.

## Customization

The quiz questions, answer choices, and the countdown timer duration can be customized by modifying the `quizData` array and the `duration` variable in the `script.js` file.

## Technologies Used

1. <b>HTML</b>: Hypertext Markup Language is used to structure the content of the web pages. It defines the layout and elements of the quiz questions, answer choices, timer, and other elements on the page.

2. <b>CSS</b>: Cascading Style Sheets are used to style the HTML elements, giving the application its visual appearance, layout, and responsive design.

3. <b>JavaScript</b>: JavaScript is the core programming language used to add interactivity and functionality to the quiz application. It handles user interactions, scoring, the countdown timer, and dynamically updating the quiz questions and choices.

These three technologies, HTML, CSS, and JavaScript, form the foundation of the Timed Coding Quiz application and enable it to run in a web browser, providing an engaging and interactive user experience.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

## Questions

If you have any questions about this program or would like to report a bug, please contact the author through GitHub:
[GitHub](https://github.com/tg1489/)

Alternatively, you may reach out and email me down below if you have any additional questions about the program:
[Email](mailto:tonyguarino1489@gmail.com)

## License

This application is licensed under the MIT License. See the LICENSE file for more information.
