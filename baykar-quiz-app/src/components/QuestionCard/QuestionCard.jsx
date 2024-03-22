import React from 'react'
import './QuestionCard.css'

const QuestionCard = ({ quizData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber, loadResultPage, setLoadResultPage }) => {

    const answerChoices = ['A)', 'B)', 'C)', 'D)']
    const userAnswers = []

    const approvedChoice = (e) => {
        const correctAnswer = (quizData[currentQuestionNumber]?.answers?.filter(answer => answer.correct))[0]
        const selectedAnswer = e.currentTarget.value
        const checkAnswer = selectedAnswer === correctAnswer.text

        if (checkAnswer) {
        } else {
        }

        userAnswers.push({ question: quizData[currentQuestionNumber]?.question, correctAnswer: correctAnswer, selectedAnswer: selectedAnswer, result: checkAnswer })
    }

    return (
        <div className='question-card'>
            <div className='question-container'>
                <div className="timer">
                    <div className="countdown">30</div>
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
            <div className="progress">{currentQuestionNumber + 1} / {quizData.length}</div>
        </div>
    )
}

export default QuestionCard