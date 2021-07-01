import './Characters.css';
import Character from "../character/Character";
import {useEffect, useState} from "react";
import {getAllCharacters} from "../../services/API";

export default function Characters({aboutCharacter, getEpisodeFn, getLocationFn, page, url}) {
    let [characters, setCharacters] = useState([])
    useEffect(() => {
        getAllCharacters(page).then(value => setCharacters(value.data.results))
    }, [page])
    return (
        <div className={"characters"}>
            {characters && characters.map((value, index) => <Character key={index} character={value}
                                                                       aboutCharacter={aboutCharacter}
                                                                       getEpisodeFn={getEpisodeFn}
                                                                       getLocationFn={getLocationFn}
                                                                       url={url}/>)}
        </div>
    );
}