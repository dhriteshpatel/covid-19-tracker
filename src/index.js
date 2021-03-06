import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import covidReducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension"


const store = createStore(covidReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
<Provider store={store}>,
<App />
</Provider>
, document.getElementById('root'));