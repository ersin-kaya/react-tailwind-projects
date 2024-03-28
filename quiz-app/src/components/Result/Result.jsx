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
                            Tebrikler! Sınavı tamamlamış bulunmaktasınız. Aşağıdan cevaplarınızı inceleyebilirsiniz.
                        </th>
                    </tr>
                    <tr>&nbsp;</tr>
                    <tr className='score-row'>
                        <th>
                            <h2 className='score-title'>Puanınız: <span className='score'>{score}</span></h2>
                            <span className='correct-answer-row result-span'>Doğru sayısı: {correctAnswerCount}</span>
                            <span className='empty-answer-row result-span'>Boş sayısı: {emptyAnswerCount}</span>
                            <span className='wrong-answer-row result-span'>Yanlış sayısı: {wrongAnswerCount}</span>
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
                                        <td><span className='question-result-span'>{index + 1}. Soru: </span>{userAnswer.question}</td>
                                    </tr>
                                    <tr className=''>
                                        <td><span className='question-result-span'>Cevabınız:</span> {(userAnswer.selectedAnswer != undefined) ? userAnswer.selectedAnswer : '# Yanıtlanmadı #'}</td>
                                    </tr>
                                    {
                                        (!userAnswer.result)
                                            ?
                                            <tr>
                                                <td><span className='question-result-span'>Doğru cevap:</span> {userAnswer.correctAnswer.text}</td>
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
                        <button onClick={() => { window.location = "/" }} className='retake-quiz-btn'>Tekrar çöz</button>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

export default Result