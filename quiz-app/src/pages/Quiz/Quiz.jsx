import React, { useEffect, useState } from 'react'
import * as api from '../../api/quizAPI'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import Result from '../../components/Result/Result'

const Quiz = () => {
    const [quizData, setQuizData] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [showResult, setShowResult] = useState(false)

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

        if (answers.filter(a => a.correct).length === 0) {
            answers[0].correct = true
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
            setQuizData(createQuiz(10, data))
        }
        getData()
    }, [])

    return (
        <div className='quiz'>
            {
                showResult
                    ?
                    <Result userAnswers={userAnswers} score={score} />
                    :
                    <QuestionCard
                        quizData={quizData}
                        score={score}
                        setScore={setScore}
                        currentQuestionNumber={currentQuestionNumber}
                        setCurrentQuestionNumber={setCurrentQuestionNumber}
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                        showResult={showResult}
                        setShowResult={setShowResult}
                    />
            }
        </div>
    )
}

export default Quiz