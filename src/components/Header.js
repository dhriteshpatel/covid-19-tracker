import React, { useState, useEffect} from "react";
import "../styles/Header.css"



const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dateValue, setDateValue] = useState("");
  const [value, setValue] = useState(0);
  
 
  const handleChange = (event) =>{
      console.log(event);
      setDateValue(event.target.value)
  }

  useEffect(() => {
         if(value == 0){
         var year = startDate.getFullYear();
         var month = startDate.getMonth();
         var day = startDate.getDate();
        
         setDateValue(`${year}-0${month+1}-${day}`);
         console.log(dateValue);
         setValue(1);
         }
         
  })
  return (
      <div className="header">
          <input 
          type="date" id="start" name="trip-start" className="datepicker"
          value={dateValue} onChange={handleChange} />  
      </div>
  );
};

export default Header;