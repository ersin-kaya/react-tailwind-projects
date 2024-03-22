import React, { useState, useEffect } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ quizData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers, showResult, setShowResult }) => {
    const answerChoices = ['A)', 'B)', 'C)', 'D)']
    const scoreForEachCorrectAnswer = 10
    const durationForEachQuestion = 30
    const waitingPeriod = 10
    const questionCountForQuiz = quizData.length

    const warning = document.getElementById('warning')

    const [timer, setTimer] = useState(durationForEachQuestion)

    const approvedChoice = (e) => {

        if (timer <= durationForEachQuestion - waitingPeriod) {
            warning.classList.add('hide')

            const correctAnswer = (quizData[currentQuestionNumber]?.answers?.filter(answer => answer.correct))[0]
            const selectedAnswer = e.currentTarget.value
            const checkAnswer = selectedAnswer === correctAnswer.text

            const userAnswer = { question: quizData[currentQuestionNumber]?.question, correctAnswer: correctAnswer, selectedAnswer: selectedAnswer, result: checkAnswer }
            setUserAnswers([...userAnswers, userAnswer])

            if (checkAnswer) {
                setScore(score + scoreForEachCorrectAnswer)
            } else {
            }

            setCurrentQuestionNumber(currentQuestionNumber + 1)
            if (currentQuestionNumber + 1 === questionCountForQuiz) {
                setShowResult(true)
            }
            setTimer(durationForEachQuestion)
        } else {
            warning.classList.remove('hide')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
            else if (timer === 0 && currentQuestionNumber < questionCountForQuiz) {
                warning.classList.add('hide')
                setCurrentQuestionNumber(currentQuestionNumber + 1)
                setTimer(durationForEachQuestion)
            }
            else if (currentQuestionNumber >= questionCountForQuiz) {
                setShowResult(true)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [timer])


    return (
        <div className='question-card'>
            <div className='question-container'>
                <div className="timer">
                    <div className="warning hide" id='warning'>Soruları ilk {waitingPeriod} saniye boyunca cevaplayamazsınız!</div>
                    <div className="countdown">{timer}</div>
                </div>
                <div className="question">
                    <div className="questionNumber">{currentQuestionNumber + 1}. &nbsp;</div>
                    <div className="questionText">{quizData[currentQuestionNumber]?.question}</div>
                </div>
                <div className="answers">
                    {
                        quizData[currentQuestionNumber]?.answers?.map((answer, index) => {
                            return (
                                <button
                                    className="answer"
                                    value={answer.text}
                                    onClick={approvedChoice}
                                    key={index}
                                >
                                    <div className='answer-choice'>{answerChoices[index]}</div>
                                    {answer.text}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="progress">{currentQuestionNumber + 1} / {questionCountForQuiz}</div>
        </div>
    )
}

export default QuestionCard