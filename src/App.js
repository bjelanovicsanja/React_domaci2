
import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import './App.css';

import PageWelcome from './components/PageWelcome/PageWelcome';
import {questions} from './data/questions';
import { time_allowed }  from './time_allowed/time_allowed';
import Counter from './components/Counter/counter';
import Results from './components/Results/results';
import Questions from './components/Questions/questions';







const randomQuestions = _.shuffle(questions)
 .slice(0,20)
 .map((question) => {
     question.answers = _.shuffle(question.answers);
     return question;
 });

function App() {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState(Array(20).fill(null));
    const [timer, setTimer] = useState(time_allowed);
    const [time_up, setTime_up] = useState(false);
    const timerRef = useRef(null);


   useEffect(() => {
       if(time_up ) clearInterval(timerRef.current)
   }, [time_up] )

    const quiz = (
        <React.Fragment>
            <div className='container'>
                <div className='correct'>
                    <span>Tačnih odgovora:</span>
                    <span className='answers'>{_.sum(answers)}</span>
                </div>

                <Counter 
                setTime_up = {setTime_up}
                questionNumber = {questionNumber}
                setTimer = {setTimer}
                timer = {timer}
                timerRef = {timerRef}
            />

            <div className='wrong'>
                <span>Netačnih odgovora:</span>
                <span className='answers'>
                    {answers.filter((answer) => answer === 0).length}

                </span>
            </div>
            </div>
            {questionNumber < 21 && !time_up ? (
                <Questions
                 question = {randomQuestions[questionNumber - 1]}
                 answers = {answers}
                 setAnswers = {setAnswers}
                 questionNumber = {questionNumber}
                 setQuestionNumber = {setQuestionNumber}

                 />

            ) : (
                <Results answers={answers} timer = {timer} />
            )}
        
        </React.Fragment>
    );

    return (
        <div className='App'>
            
            {questionNumber === 0 ? (
                <PageWelcome setQuestionNumber = {setQuestionNumber}/>
        
            ) : (
                quiz
            )}
        </div>
    );
}

export default App;