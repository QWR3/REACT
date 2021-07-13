import './App.css'

import {useSelector} from "react-redux";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

export default function App () {

    return(
        <div className={'app'}>
            <Header/>
            <MoviesList/>
        </div>
    );
}