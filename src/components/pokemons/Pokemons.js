import './Pokemons.css'
import Pokemon from "../pokemon/Pokemon";
import {getPokemons} from "../../services/API";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Pokemons({match}) {
    const pokemons = useSelector(({pokemons}) => pokemons)
    const dispatch = useDispatch()

    const paramsPage = parseInt(match.params.page) - 1

    useEffect(() => {
        dispatch({type: "SET_URL_TO_CHOSEN", payload: match.url})

        getPokemons( paramsPage * 50).then(value => {
            dispatch({type: "ADD_POKEMONS", payload: {...value.data}})
        })
    }, [dispatch, match.url, paramsPage])

    return (
        <div className={'pokemons'}>
            {pokemons && pokemons.results.map(value => <Pokemon key={value.name} item={value}
                                                                         url={match.url}/>)}
        </div>
    );
}