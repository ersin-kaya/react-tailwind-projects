import React from 'react'
import './Result.css'

const Result = ({ userAnswers, score }) => {
    const correctAnswerCount = userAnswers.filter(answer => answer.result)?.length
    const emptyAnswerCount = userAnswers.filter(answer => answer.result == undefined)?.length
    const wrongAnswerCount = userAnswers.filter(answer => answer.result === false)?.length

    return (
        <div className='result'>
            <table className='result-table'>
                <thead className='table-header'>
                    <tr>
                        <th>
                            Congratulations! You have completed the exam. You can examine your answers below.
                        </th>
                    </tr>
                    <tr>&nbsp;</tr>
                    <tr className='score-row'>
                        <th>
                            <h2 className='score-title'>Your score: <span className='score'>{score}</span></h2>
                            <span className='correct-answer-row result-span'>Number of correct: {correctAnswerCount}</span>
                            <span className='empty-answer-row result-span'>Number of empty: {emptyAnswerCount}</span>
                            <span className='wrong-answer-row result-span'>Number of wrong: {wrongAnswerCount}</span>
                        </th>
                    </tr>
                    <tr>&nbsp;</tr>
                    <tr>&nbsp;</tr>
                </thead>

                <tbody className='question-result'>
                    {
                        userAnswers.map((userAnswer, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr className={(userAnswer.result) ? 'correct-answer-row' : (userAnswer.result == undefined) ? 'empty-answer-row' : 'wrong-answer-row'}>
                                        <td>
                                            <span className='question-result-span'>
                                                Question {index + 1}:
                                            </span>
                                            {userAnswer.question}
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td>
                                            <span className='question-result-span'>
                                                Your answer:
                                            </span>
                                            {(userAnswer.selectedAnswer != undefined) ? userAnswer.selectedAnswer : 'Not answered'}
                                        </td>
                                    </tr>
                                    {
                                        (!userAnswer.result)
                                            ?
                                            <tr>
                                                <td>
                                                    <span className='question-result-span'>
                                                        Correct answer:
                                                    </span>
                                                    {userAnswer.correctAnswer.text}
                                                </td>
                                            </tr>
                                            : <></>
                                    }
                                    <tr>&nbsp;</tr>
                                    <tr>&nbsp;</tr>
                                    <tr>&nbsp;</tr>
                                </React.Fragment>
                            )
                        })
                    }
                </tbody>

                <tfoot>
                    <tr className='retake-quiz-row'>
                        <button onClick={() => { window.location = "/" }} className='retake-quiz-btn'>Retake quiz</button>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

export default Result