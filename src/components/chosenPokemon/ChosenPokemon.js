import './ChosenPokemon.css'
import {getPokemon} from "../../services/API";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ChosenPokemon({name}) {
    const chosen = useSelector(({chosen}) => chosen)
    const dispatch = useDispatch()

    useEffect(() => {
        getPokemon(name).then(value => {
            dispatch({type: "SET_CHOSEN", payload: value.data})
        })
    }, [dispatch, name])

    return (
        <div>
            {chosen && <div className={"chosenPokemon"}>
                <h2>{chosen.id}-{chosen.name}</h2>
                <h3>height-{chosen.height} weight-{chosen.weight}</h3>
                <h3>base experience-{chosen.base_experience}</h3>
                <h3>last seen in {chosen.moves[chosen.moves.length - 1].move.name}</h3>
            </div>}
        </div>
    );
}