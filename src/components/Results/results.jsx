import _ from 'lodash';
import React from 'react';
import './results.css';

export default function Results ({ answers, timer}){
    const buttonClick = () => {
        window.location.reload();
    };

    return (
        <div className='Results'>
            <h2>Kviz je zavrsen!</h2>
            <p className='time_result'>
                {timer === 0 ? 'Vrijeme je isteklo.' : `Preostalo vrijeme je: ${timer} sekundi.`}
            </p>
            <div className='score'>
                <p className=  "score_p">
                    <strong>Rezultat:</strong>
                </p>
                <p>{_.sum(answers)} tacnih odgovora.</p>
                <p>{20 - _.sum(answers)} pogresnih odgovora.</p>
            </div>
            <button onClick={buttonClick}>Igraj ponovo!</button>
        </div>
    );
}
