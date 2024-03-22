import React from 'react'
import './QuestionCard.css'

const Questions = ({ quizData, score, setScore, currentQuestionNumber, setCurrentQuestionNumber, loadResultPage, setLoadResultPage }) => {
    const answerChoices = ['A)', 'B)', 'C)', 'D)'];

    return (
        <div className='question-card'>
            <div className='question-container'>
                <div className="timer">30</div>
                <div className="question">
                    <div className="questionNumber">{currentQuestionNumber + 1}. &nbsp;</div>
                    <div className="questionText">{quizData[currentQuestionNumber]?.question}</div>
                </div>
                <div className="answers">
                    {
                        quizData[currentQuestionNumber]?.answers?.map((answer, index) => {
                            return (
                                <button className="answer" key={index}>
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

export default Questions