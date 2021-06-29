import './App.css';
import {useEffect, useReducer} from "react";
import {getAllCharacters} from "./services/API";
import Characters from "./components/characters/Characters";
import AboutCharacter from "./components/aboutCharacter/AboutCharacter";
import Buttons from "./components/buttons/Buttons";
import Episode from "./components/episode/Episode";
import Location from "./components/location/Location"

let reducer = (state, action) => {
    switch (action.type) {
        case "setCharacters":
            return {...state, characters: action.payload}
        case "setAboutCharacter":
            return {...state, aboutCharacter: action.payload}
        case "setPage":
            return {...state, page: action.payload}
        case "setEpisode":
            return {...state, episode: action.payload}
        case "setLocation":
            return {...state, location: action.payload}
    }
}

function App() {
    let [state, dispatch] = useReducer(reducer, {
        characters: null,
        aboutCharacter: null,
        page: 1,
        episode: null,
        location: null
    })
    let {characters, aboutCharacter, page, episode, location} = state;


    let getLocationFn = (location) => {
        dispatch({type: "setLocation", payload: location})
    }

    let getEpisodeFn = (epispde) => {
        dispatch({type: "setEpisode", payload: epispde})
    }


    useEffect(() => {
        getAllCharacters(page).then(value => {
            // console.log(JSON.stringify(value.data.results))
            dispatch({type: "setCharacters", payload: value.data.results})
        })
    }, [page])
    let pageNext = () => {
        dispatch({type: "setPage", payload: page + 1})
    }
    let pagePrevious = () => {
        dispatch({type:"setPage",payload:page - 1})
    }
    let aboutCharacterFn = (character) => {
        dispatch({type:"setAboutCharacter",payload:character})
    }

    return (
        <div className={'father'}>
            <div>
                <Buttons page={page} pagePrevious={pagePrevious} pageNext={pageNext}/>
                {characters &&
                <Characters items={characters} aboutCharacter={aboutCharacterFn} getEpisodeFn={getEpisodeFn}
                            getLocationFn={getLocationFn}/>}
                <Buttons page={page} pagePrevious={pagePrevious} pageNext={pageNext}/>
            </div>
            <div>
                {aboutCharacter &&
                <AboutCharacter character={aboutCharacter} getEpisodeFn={getEpisodeFn} getLocationFn={getLocationFn}/>}
                {episode && <Episode episode={episode}/>}
                {location && <Location location={location}/>}
            </div>
        </div>
    );
}

export default App;
// не забудьте встановити axios