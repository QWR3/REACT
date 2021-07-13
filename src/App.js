import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieInfo from "./components/MovieInfo/MovieInfo";

export default function App() {

    return (
        <Router>
            <div className={'app'}>
                <Header/>
                <Switch>
                    <Route path={'/:id'} render={(props)=><MovieInfo id={props.match.params.id}/>}/>
                    <Route path={'/'} render={()=><MoviesList/>}/>
                </Switch>
            </div>
        </Router>
    );
}