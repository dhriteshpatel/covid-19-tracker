import axios from "axios";

const changeState = (...states) => {
    return async (dispatch, getState) => {
        try {
            console.log("astates",states);
            var myData = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
            var data = myData.data;
            var keys = Object.keys(data);
            var resultKeys = keys.filter((item,index) => states.includes(index));
            var confirmed = 0,tested = 0,recovered = 0, length = resultKeys.length;
            var confirmedStates = [];
            var recoveredStates = [];
            var testedStates = [];
            for(let indexValue of resultKeys) {
                confirmedStates.push(data[indexValue].total.confirmed)
                confirmed += data[indexValue].total.confirmed;
                testedStates.push(data[indexValue].total.tested);
                tested += data[indexValue].total.tested;
                recoveredStates.push(data[indexValue].total.recovered);
                recovered += data[indexValue].total.recovered;
            }
            
            console.log("confirmed", confirmed, "tested", tested, "length", length, "recovered", recovered);           
            dispatch({
                type: "CHANGE_STATE",
                payload: {
                    length,
                    recovered,
                    tested,
                    confirmed,
                    confirmedStates,
                    recoveredStates,
                    testedStates,
                    resultKeys
                }
            })

        }catch (err) {
           dispatch({
               type: "FAILURE",
               payload: {
                   length : 0,
                   recovered : 0,
                   tested : 0,
                   recovered : 0,
                   resultKeys : [],
                   confirmedStates: [],
                   recoveredStates: [],
                   testedStates: [],
               }
           })
        }
    }
}

export default changeState;