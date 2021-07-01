import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import {useState} from "react";
import Characters from "./components/characters/Characters";
import AboutCharacter from "./components/aboutCharacter/AboutCharacter";
import Buttons from "./components/buttons/Buttons";
import Episode from "./components/episode/Episode";
import Location from "./components/location/Location"


function App() {
    let [aboutCharacter, setAboutCharacter] = useState([])
    let [episode, setEpisode] = useState([])
    let [location, setLocation] = useState([])

    let getLocationFn = (location) => {
        setLocation(location);
        setEpisode(null)

    }

    let getEpisodeFn = (epispde) => {
        setEpisode(epispde);
        setLocation(null)

    }
    let aboutCharacterFn = (character) => {
        setAboutCharacter(character)
    }

    return (
        <Router>
            <Switch>
                <div className={'father'}>
                    <Route exact path={'/'} render={() => {
                        setEpisode(null)
                        setLocation(null)
                        return (
                            <div className={'start'}>
                                <Link to={'/page=1'}>
                                    <button>start</button>
                                </Link>
                            </div>)

                    }}/>
                    <div>
                        <Route path={'/page=:page'} render={(props) => {
                            setEpisode(null)
                            setLocation(null)
                            return (<div>
                                <Buttons
                                    page={props.match.params.page}/>
                                <Characters page={props.match.params.page}
                                            aboutCharacter={aboutCharacterFn}
                                            getEpisodeFn={getEpisodeFn}
                                            getLocationFn={getLocationFn}
                                            url={props.match.url}/>
                                <Buttons page={props.match.params.page}/>
                            </div>)
                        }

                        }/>
                    </div>
                    <div>
                        {aboutCharacter &&
                        <AboutCharacter character={aboutCharacter} getEpisodeFn={getEpisodeFn}
                                        getLocationFn={getLocationFn}/>}
                        {episode && <Episode episode={episode}/>}
                        {location && <Location location={location}/>}
                    </div>
                </div>
            </Switch>
        </Router>

    );
}

export default App;
// не забудьте встановити axios, react-router-dom