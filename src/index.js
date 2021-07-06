import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case "INC": {
            return {...state, number: state.number + 1}
        }
        case "DEC": {
            return {...state, number: state.number - 1}
        }
        case "INC_CUSTOM": {
            return {...state, number: state.number + action.payload}
        }
        case "DEC_CUSTOM": {
            return {...state, number: state.number - action.payload}
        }
        case "RESET": {
            return {...state, number: 0}
        }
        default: {
            return {...state}
        }
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
