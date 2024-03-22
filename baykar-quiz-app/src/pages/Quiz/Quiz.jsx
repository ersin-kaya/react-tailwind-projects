import React, { useEffect, useState } from 'react'
import './Quiz.css'
import * as api from '../../api/quizAPI'

const Quiz = () => {
    const [questions, setQuestions] = useState([])

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function createAnswers(text) {
        const words = text.split(" ")
        const answers = []
        const answerCount = 4
        let correctAnswerCount = 0

        while (answers.length < answerCount) {
            const startIndex = getRandomNumber(0, words.length - 1)
            const randomWordSize = getRandomNumber(1, words.length)

            let isCorrect = Math.random() < 0.5

            const answer = {
                text: capitalizeFirstLetter(words.slice(startIndex, startIndex + randomWordSize).join(" ")),
                correct: (correctAnswerCount === 0) ? isCorrect : false
            }

            if (isCorrect) {
                correctAnswerCount++
            }

            answers.push(answer)
        }

        return shuffleArray(answers)
    }

    function createQuestion(object) {
        let questionText = capitalizeFirstLetter(object.title)
        let answers = createAnswers(object.body)

        let question = { id: object.id, question: `${questionText}?`, answers: answers }
        return question
    }

    function createQuiz(questionNumber, data) {
        let questions = []

        for (let index = 0; index < questionNumber; index++) {
            questions.push(createQuestion(data[index]))
        }

        return shuffleArray(questions)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await api.fetchQuizData()
            // console.log(data)

            setQuestions(createQuiz(10, data))

            // setQuestions(currentQuestions => [...questions, ...['data']])
        }
        getData()
    }, [])

    console.log(questions);

    return (
        <div className='quiz'>Quiz</div>
    )
}

export default Quiz