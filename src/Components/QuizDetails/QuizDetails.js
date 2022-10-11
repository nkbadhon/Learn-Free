import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import './QuizDetails.css'

const QuizDetails = () => {
    const singlecatquiz = useLoaderData();
    // console.log(singlecatquiz.data.questions[0])
    const { data } = singlecatquiz;
    return (
        <div>
            <h2>Quiz of {data.name}</h2>
            <div>
                {
                    data.questions.map(ques => <QuizQuestions key={ques.id} ques={ques}>  </QuizQuestions>

                    )

                }
            </div>
        </div >
    );
};

export default QuizDetails;