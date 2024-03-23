import React from 'react'
import './Result.css'

const Result = ({ userAnswers, score }) => {
    console.log(userAnswers);
    return (
        <div className='result'>
            <table>
                <thead>
                    <tr>
                        <th>Tebrikler! Sınavı tamamlamış bulunmaktasınız.</th>
                    </tr>
                </thead>

                <tbody className='question-result'>
                    {
                        userAnswers.map((userAnswer, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td><strong>{index + 1}. Soru:</strong> {userAnswer.question}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cevabınız:</strong> {(userAnswer.selectedAnswer != undefined) ? userAnswer.selectedAnswer : '# Yanıtlanmadı #'}</td>
                                    </tr>
                                    {
                                        (!userAnswer.result)
                                            ?
                                            <tr>
                                                <td><strong>Doğru cevap:</strong> {userAnswer.correctAnswer.text}</td>
                                            </tr>
                                            : <></>
                                    }
                                    <tr>&nbsp;</tr>
                                </React.Fragment>
                            )
                        })
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <th colSpan={2} className='bg-blue'><h2>Puanınız: {score}</h2></th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

export default Result