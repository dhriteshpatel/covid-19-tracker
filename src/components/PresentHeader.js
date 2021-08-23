import React from 'react';
import "../styles/PresentHeader.css";
import { useSelector } from 'react-redux';
import { useReducer } from 'react'
import covidReducer from '../reducers/reducer';

const PresentHeader = () => {
    const { totalStates, tested, confirmed, recovered} = useSelector(state => state)
    // const myData = useSelector(covidReducer);
    return (
        <div className="present">
                 <div className="coviddata">
                     <label className="labels">
                         SELECTED STATES
                     </label>
                     <h1 className="statecount">{totalStates}</h1>
                 </div>
                 <div className="coviddata">
                     <label className="labels">
                         TESTED
                     </label>
                     <h2>{tested}</h2>
                 </div>
                 <div className="coviddata">
                     <label className="labels">
                         CONFIRMED
                     </label>
                     <h2>{confirmed}</h2>
                 </div>
                 <div className="coviddata">
                     <label className="labels">
                         RECOVERED
                     </label>
                     <h2>{recovered}</h2>
                 </div>
            </div>
    )
}

export default PresentHeader;
