import React, { useState, useEffect } from 'react'
import './QuestionCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionCard = ({ quizData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers, showResult, setShowResult }) => {
    const answerChoices = ['A)', 'B)', 'C)', 'D)']
    const scoreForEachCorrectAnswer = 10
    const durationForEachQuestion = 30
    const questionCountForQuiz = quizData.length
    const waitingPeriod = 10
    const warningMessageForWaitingPeriod = `Soruları ilk ${waitingPeriod} saniye boyunca cevaplayamazsınız!`

    const [timer, setTimer] = useState(durationForEachQuestion)

    const question = quizData[currentQuestionNumber]?.question
    let correctAnswer
    try {
        correctAnswer = (quizData[currentQuestionNumber]?.answers?.filter(answer => answer.correct))[0]
    } catch (error) {

    }

    const approvedChoice = (e) => {

        if (timer <= durationForEachQuestion - waitingPeriod) {
            const selectedAnswer = e.currentTarget.value
            const checkAnswer = selectedAnswer === correctAnswer.text

            const userAnswer = { question: question, correctAnswer: correctAnswer, selectedAnswer: selectedAnswer, result: checkAnswer }
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
            showToastMessageForWaitingPeriod()
        }
    }

    const showToastMessageForWaitingPeriod = () => {
        toast.warning(warningMessageForWaitingPeriod, {
            position: 'top-left',
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
            else if (timer === 0 && currentQuestionNumber < questionCountForQuiz) {
                setCurrentQuestionNumber(currentQuestionNumber + 1)
                setTimer(durationForEachQuestion)

                const userAnswer = { question: question, correctAnswer: correctAnswer, selectedAnswer: undefined, result: undefined }
                setUserAnswers([...userAnswers, userAnswer])

                if (currentQuestionNumber + 1 >= questionCountForQuiz) {
                    setShowResult(true)
                }
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