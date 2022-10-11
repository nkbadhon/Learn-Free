import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizQuestions.css'

const QuizQuestions = ({ ques }) => {
    const { question } = ques;
    console.log(ques.options)

    return (
        <div>
            <div className='quiz'>
                <h5>{question}</h5>
                <div className='quizoptions'>
                    <div>{ques.options[0]}</div>
                    <div>{ques.options[1]}</div>
                    <div>{ques.options[2]}</div>
                    <div>{ques.options[3]}</div>
                </div>
            </div>

        </div>
    );
};

export default QuizQuestions;