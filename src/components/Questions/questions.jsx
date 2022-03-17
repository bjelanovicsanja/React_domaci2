import React, { useState, useEffect } from 'react';
import './questions.css';

export default function Questions ( {
    question,
    questionNumber,
    setQuestionNumber,
    answers,
    setAnswers,

}) {
    const [pick, setPick] = useState(null);
    const [answerConfirmed, setAnswerConfirmed] = useState(false);

    useEffect(() => {
        let check = true;
        setTimeout(() => {
            if(check && answerConfirmed){
                setQuestionNumber((prev) => prev + 1);
                setPick(null);
                setAnswerConfirmed(false);
            }
        }, 1000);
        return () => {
            check = false;
        };
    }, [answerConfirmed, setQuestionNumber]);

    const onChange = (e) => {
        if(answerConfirmed) return;
        setPick(e.target.value);
    };


    const onConfirm = () => {
        if(answerConfirmed) return;
        const newAnswer = [...answers];
        newAnswer[questionNumber - 1] = pick === question.correctAnswer ? 1 : 0;
        setAnswers(newAnswer);
        setAnswerConfirmed(true);

    };

    const addValidation = (answer) => {
        if(question.correctAnswer ===  answer) return 'correct';
        if(pick === answer && answer !== question.correctAnswer) return 'wrong';

    };

    const quitButton = () => {
        window.location.reload();
    }

    return (
        <div className='Question'>
            <div className='title'>
                <span className='title_text'>{question.question}</span>
            </div>
            <div className='answers'>
                {question.answers.map((answer, index) => (
                    <div key={index} className = "field">
                        <input type="radio" name="answers" value={answer} id={`answer-${index}`} onChange={onChange} checked={pick === question.answers[index]}/>
                    <label className={answerConfirmed ? addValidation(answer) : ''}
                    htmlFor={`answer-${index}`}
                    >
                        
                        {answer}
                     </label>      
                    </div>              
                ))}
            </div>
            <div className='buttons'>
                <button onClick={onConfirm}>
                    {pick ? 'Odgovori' : 'Dalje'}
                </button>

                <button className='danger' onClick={quitButton} >Odustani</button>
            </div>
        </div>
    );
    
}