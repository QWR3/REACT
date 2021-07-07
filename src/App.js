import './App.css'
import Pokemons from "./components/pokemons/Pokemons";
import Buttons from "./components/buttons/Buttons";
import ChosenPokemon from "./components/chosenPokemon/ChosenPokemon";

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {useSelector} from "react-redux";


export default function App() {
    const path = '/pokemons/page='

    const urlToChosen = useSelector(({urlToChosen}) => urlToChosen)

    return (
        <Router>
            <div className={'father'}>
                <Route exact path={'/'} render={() => <Link to={path + '1'}><h1>START</h1></Link>}/>

                <Route path={path + ':page'} render={(props) =>
                    <div>
                        <Buttons page={props.match.params.page} url={path}/>

                        <Pokemons match={props.match}/>

                        <Buttons page={props.match.params.page} url={path}/>
                    </div>
                }/>

                <Route exact path={urlToChosen + '/:name'}
                       render={(props) => <ChosenPokemon name={props.match.params.name}/>}/>
            </div>
        </Router>
    );
}