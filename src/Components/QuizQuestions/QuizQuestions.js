import React from 'react';
import './QuizQuestions.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestions = ({ ques }) => {
    const { question, correctAnswer } = ques;
    // console.log(ques)

    const eyebuttontext = (correctAnswer) => toast(`${correctAnswer}`, { position: "top-center" });

    const selectedbutton = (opt) => {
        if (opt === correctAnswer) {
            toast("Right Answer", { position: "top-center" });
        }
        else {
            toast("Wrong Answer", { position: "top-center" });
        }

    }


    return (
        <div>
            <div className='quiz'>
                <div className='Eyecls'>
                    <h5>{question}</h5>
                    <button onClick={() => eyebuttontext(correctAnswer)}><EyeIcon className="h-6 w-6 text-blue-500" /></button>
                </div>
                <div className='quizoptions'>
                    {
                        ques.options.map(opt => <button className='OptionButton' onClick={() => selectedbutton(opt)}>{opt}</button>)

                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizQuestions;