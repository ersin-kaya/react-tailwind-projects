import React from 'react'
import './Introduce.css'
import quizImage from '../../assets/quiz.png'

const Introduce = () => {
    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img className='quiz-image' src={quizImage} />
                <div className="quiz-description">
                    <h2 className='introduce-title'>Hoş geldiniz, sınava başlamadan önce dikkat etmeniz gerekenler:</h2>
                    <ul className="introduce-quiz-rules">
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum!</li>
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odit vitae explicabo molestiae cupiditate impedit?</li>
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam eum similique.</li>
                        <li className="quiz-rule">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <button className="start-btn">Sınava git</button>
                </div>
            </div>
        </div>
    )
}

export default Introduce