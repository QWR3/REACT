import './App.css';
import {useEffect, useState} from "react";
import {getAllCharacters} from "./services/API";
import Characters from "./components/characters/Characters";
import AboutCharacter from "./components/aboutCharacter/AboutCharacter";
import Buttons from "./components/buttons/Buttons";
import Episode from "./components/episode/Episode";
import Location from "./components/location/Location"

function App() {
    let [characters, setCharacters] = useState(null)
    let [aboutCharacter, setAboutCharacter] = useState(null)
    let [page, setPage] = useState(1)
    let [episode, setEpisode] = useState(null);
    let [location, setLocation] = useState(null);

    let getLocationFn = (location)=>{
        setLocation(location)
    }

    let getEpisodeFn = (epispde) => {
        setEpisode(epispde)
    }


    useEffect(() => {
        getAllCharacters(page).then(value => {
            setCharacters(value.data.results)
        })
    }, [page])
    let pageNext = () => {
        setPage(page + 1)
    }
    let pagePrevious = () => {
        setPage(page - 1)
    }
    let aboutCharacterFn = (character) => {
        setAboutCharacter(character)
    }

    return (
        <div className={'father'}>
            <div>
                <Buttons page={page} pagePrevious={pagePrevious} pageNext={pageNext}/>
                {characters &&
                <Characters items={characters} aboutCharacter={aboutCharacterFn} getEpisodeFn={getEpisodeFn} getLocationFn={getLocationFn}/>}
                <Buttons page={page} pagePrevious={pagePrevious} pageNext={pageNext} />
            </div>
            <div>
                {aboutCharacter && <AboutCharacter character={aboutCharacter} getEpisodeFn={getEpisodeFn} getLocationFn={getLocationFn}/>}
                {episode && <Episode episode={episode}/>}
                {location && <Location location={location}/>}
            </div>
        </div>
    );
}

export default App;
// не забудьте встановити axios