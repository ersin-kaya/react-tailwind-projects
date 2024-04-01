import React, { useState, useEffect } from 'react'
import './QuestionCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionCard = ({ quizData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber, userAnswers, setUserAnswers, showResult, setShowResult }) => {
    const answerChoices = ['A)', 'B)', 'C)', 'D)']
    const scoreForEachCorrectAnswer = 10
    const durationForEachQuestion = 30
    const questionCountForQuiz = quizData.length
    const waitingPeriod = 5
    const warningMessageForWaitingPeriod = `You cannot answer or skip questions during the first ${waitingPeriod} seconds!`


    const [timer, setTimer] = useState(durationForEachQuestion)
    const [selectedButton, setSelectedButton] = useState(undefined)
    const [selectedAnswer, setSelectedAnswer] = useState('')

    const question = quizData[currentQuestionNumber]?.question

    let correctAnswer
    try {
        correctAnswer = (quizData[currentQuestionNumber]?.answers?.filter(answer => answer.correct))[0]
    } catch (error) {

    }

    document.addEventListener('click', function (e) {
        if (e.target.nodeName != 'BUTTON') {
            handleButtonFocusForNextQuestion()
        }
    })

    const handleSelect = (e) => {
        if (timer <= durationForEachQuestion - waitingPeriod) {
            setSelectedAnswer(e.currentTarget.value)
            setSelectedButton(e.target)
        }
        else {
            e.target.blur()
            showToastMessageForWaitingPeriod()
        }
    }

    const handleButtonFocusForNextQuestion = () => {
        if (selectedButton != undefined) {
            selectedButton.blur()
            setSelectedAnswer('')
        }
    }

    const saveResultForQuestion = (selectedAnswer) => {
        const checkAnswer = selectedAnswer === correctAnswer.text

        let userAnswer
        if (selectedAnswer === '') {
            userAnswer = { question: question, correctAnswer: correctAnswer, selectedAnswer: undefined, result: undefined }
        }
        else {
            userAnswer = { question: question, correctAnswer: correctAnswer, selectedAnswer: selectedAnswer, result: checkAnswer }
        }
        setUserAnswers([...userAnswers, userAnswer])

        if (checkAnswer) {
            setScore(score + scoreForEachCorrectAnswer)
        }
    }

    const approvedChoice = () => {
        if (timer <= durationForEachQuestion - waitingPeriod) {
            saveResultForQuestion(selectedAnswer)
            setCurrentQuestionNumber(currentQuestionNumber + 1)

            if (currentQuestionNumber + 1 === questionCountForQuiz) {
                setShowResult(true)
            }

            setTimer(durationForEachQuestion)
            handleButtonFocusForNextQuestion()
        } else {
            showToastMessageForWaitingPeriod()
        }
        setSelectedAnswer('')
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
                saveResultForQuestion(selectedAnswer)

                if (currentQuestionNumber + 1 >= questionCountForQuiz) {
                    setShowResult(true)
                }

                handleButtonFocusForNextQuestion()
                setSelectedAnswer('')
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
                                    onClick={handleSelect}
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
            <div className="next-btn-container">
                <button onClick={approvedChoice} className='next-btn'>Next</button>
            </div>
            <div className="progress">{currentQuestionNumber + 1} / {questionCountForQuiz}</div>
        </div>
    )
}

export default QuestionCard