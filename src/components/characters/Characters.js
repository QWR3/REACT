import './Characters.css';
import Character from "../character/Character";

export default function Characters({items, aboutCharacter, getEpisodeFn, getLocationFn}) {
    return (
        <div className={"characters"}>
            {items.map((value, index) => <Character key={index} character={value}
                                                                aboutCharacter={aboutCharacter}
                                                                getEpisodeFn={getEpisodeFn}
                                                                getLocationFn={getLocationFn}/>)}
        </div>
    );
}