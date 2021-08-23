

const initialState = {
        totalStates: 0,
        tested: 0,
        confirmed: 0,
        recovered: 0,
        states: [],
        confirmedStates: [],
        testedStates: [],
        recoveredStates: [],
    }



const covidReducer = (state=initialState, action) => {
    switch (action.type){
        case "CHANGE_STATE":
        return {
            totalStates: action.payload.length,
            tested: action.payload.tested,
            confirmed: action.payload.confirmed,
            recovered: action.payload.recovered,
            states: action.payload.resultKeys,
            confirmedStates: action.payload.confirmedStates,
            recoveredStates: action.payload.recoveredStates,
            testedStates: action.payload.testedStates
        }
        case "FAILURE":
            return {
                totalStates: action.payload.length,
                tested: action.payload.tested,
                confirmed: action.payload.confirmed,
                recovered: action.payload.recovered
            }
        default: return state;
    }
}

export default covidReducer;