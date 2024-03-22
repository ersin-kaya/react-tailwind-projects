import React from 'react'
import './Result.css'

const Result = ({ userAnswers, score }) => {
    console.log(userAnswers);
    return (
        <div>Puanınız: {score}</div>
    )
}

export default Result