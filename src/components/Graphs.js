import React from 'react';
import "../styles/Graphs.css"
import DistrictGraph from './DistrictGraph';
import  StateGraph from './StateGraph';

const Graphs = () => {
    return (
        <div className="graphs">

            <div className="title">
                 <p className="graphtitle">GRAPHICAL REPRESENTATION</p>
            </div>

            <div className="graphsinfo">
                 <p className="statewise">STATE WISE</p>
                 <p className="districtwise">DISTRICT WISE BY STATE GROUPED</p>
            </div>

            <div className="graphpresentation">
                <p className="graphpresenttitle">TESTED CONFIRMED AND RECOVERED STATS</p>
            </div>

            <div className="maingraphs">
                <div className="stategraph"><StateGraph /></div>
                <div className="districtgraph"><DistrictGraph /></div>
            </div>
        </div>
    )
}

export default Graphs;
