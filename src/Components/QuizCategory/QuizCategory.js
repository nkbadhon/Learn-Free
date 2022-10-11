import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCategory.css'
const QuizCategory = ({ single }) => {
    const { id, name, logo, total } = single;
    return (
        <div className='FullQuiz'>
            <div className='singleCart'>
                <div className='imgdiv'><img src={logo} alt="" /></div>
                <h5> {name}</h5>
                <Link to={`/single/${id}`}><button className='QuizButton'>Show Quiz</button></Link>


            </div>
        </div>
    );
};

export default QuizCategory;