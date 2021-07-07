import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state = {pokemons: null, page: 0, urlToChosen: null, chosen:null}, action) => {
    switch (action.type) {
        case "ADD_POKEMONS":
            return {...state, pokemons: action.payload}
        case "SET_PAGE":
            return {...state, page: action.payload}
        case "SET_URL_TO_CHOSEN":
            return {...state, urlToChosen: action.payload}
        case "SET_CHOSEN":
            return {...state, chosen: action.payload}
        default:
            return state
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
