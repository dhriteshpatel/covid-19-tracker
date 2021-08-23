import React,{useEffect,useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import changeState from '../actions/action';
import '../styles/State.css';
import { Scrollbars } from "react-custom-scrollbars"

const State = () => {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const [states, setStates] = useState([]);
    const ele = useRef("");

    const checkAll = () =>{
        var myStates = [];
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(var i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = true;
            if( i != 0){
             myStates.push(+checkboxes[i].value); 
            }
        };
        console.log("myStates", myStates);
        setStates(...myStates);
        console.log(states);
        dispatch(changeState(...myStates));
    }
    useEffect(() => {
        var refresh = 0;
        fetch("https://data.covid19india.org/v4/min/data.min.json")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            setData(data);
        })
        .catch((err) => console.error(err));
        
         checkAll();

        ele.current.checked = true;
        console.log("run useEffect");
    },[]);

    const changeBox = (event) =>{
        var myStates = [];
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(var i=1; i<checkboxes.length-1; i++) {
            if(checkboxes[i].checked){
                myStates.push(+checkboxes[i].value);
            }  
        };
        console.log("myStates", myStates);
        setStates(...myStates);
        console.log(states);
        dispatch(changeState(...myStates));
    }
   
    return (
            <div className="state">
            <span className="selectstates" ref={ele} onChange={checkAll}><input type="checkbox"/> <span className="item">All States</span></span>
            <Scrollbars style={{height: `80vh` }}>
            {data && Object.keys(data).map((item, index) => { 
                return <span className="selectstates"><input type="checkbox" value={index} onChange={changeBox}/> <span className="item">{item}</span></span>
                } )}
            </Scrollbars>
        </div>
        
    )
}

export default State;
