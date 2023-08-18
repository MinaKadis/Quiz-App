import { Quiz } from "./quiz.js";
import Question from "./question.js";

// ^==========> App Variables

export const categoryMenu = document.getElementById("categoryMenu");
export const difficultyOptions = document.getElementById("difficultyOptions");
export const questionsNumber = document.getElementById("questionsNumber");
export const startBtn = document.getElementById("startQuiz");
export const quizOptionForm = document.getElementById("quizOptions");
export const questionsContainer = document.querySelector(".questions-container");

export let questions;
export let quiz;


// &==========> Events 

startBtn.addEventListener("click", async function () {
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const number = questionsNumber.value;
    quiz = new Quiz(category, difficulty, number);
    questions = await quiz.getQuestions();
    // console.log(questions);

    const question = new Question(0);
    // console.log(question);
    quizOptionForm.classList.replace("d-flex", "d-none");
    question.displayQuestion();
})