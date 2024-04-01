import React from 'react'
import './Introduce.css'
import quizImage from '../../assets/quiz.png'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const navigate = useNavigate()

    const startQuiz = () => {
        navigate('/quiz');
    }

    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img className='quiz-image' src={quizImage} />
                <div className="quiz-description">
                    <h2 className='introduce-title'>Welcome, and here are some things to consider before you start the quiz:</h2>
                    <ul className="introduce-quiz-rules">
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum!</li>
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odit vitae explicabo molestiae cupiditate impedit?</li>
                        <li className="quiz-rule">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam eum similique.</li>
                        <li className="quiz-rule">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <button onClick={startQuiz} className="start-btn">Launch</button>
                </div>
            </div>
        </div>
    )
}

export default Introduce