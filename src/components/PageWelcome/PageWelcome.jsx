import React from "react";
import './PageWelcome.css';
import {time_allowed} from '../../time_allowed/time_allowed';

export default function PageWelcome({ setQuestionNumber }) {
    const buttonClick = () => {
        setQuestionNumber(1);
    };

    return (
        <div className="Page_welcome">
            <h1>Dobro došli !</h1>
            <div className="quiz_text">
            <p>Imate 20 pitanja da odgovorite za {time_allowed} sekundi!</p>
        </div>

        <button onClick={buttonClick}>Započni KVIZ !</button>
        </div>
    );
} 



