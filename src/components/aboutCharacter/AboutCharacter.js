import './AboutCharacter.css'
import {useEffect, useReducer, useState} from "react";
import {aboutCharacter, getEpisode, getLocation} from "../../services/API";
import {Link, Route} from "react-router-dom";

let reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EPISODE":
            return {...state, episode: action.payload}
        case "ADD_LOCATION":
            return {...state, location: action.payload}
        case "ADD_CHARACTER":
            return {...state, character: action.payload}
        default:
            return {...state}
    }

}
export default function AboutCharacter({id, getEpisodeFn, getLocationFn, url}) {
    let [state, dispatch] = useReducer(reducer, {episode: [], location: [], character: []})
    let {episode, location, character} = state
    useEffect(() => {
        id && aboutCharacter(id).then(value => dispatch({type: "ADD_CHARACTER", payload: value.data}))

    }, [id])
    let {id: characterId, name, status, species, gender, location: locationUrl, image, episode: episodeUrls} = character
    useEffect(() => {
        locationUrl && getLocation(locationUrl.url).then(value => {
            dispatch({type: "ADD_LOCATION", payload: value.data})
        })
    }, [locationUrl])
    useEffect(() => {
        episodeUrls && getEpisode(episodeUrls[0]).then(value => {
            dispatch({type: "ADD_EPISODE", payload: value.data})
        })
    }, [episodeUrls])
    if (name) {
        return (
            <div className={'aboutCharacter'}>
                <img src={image} alt="" className={'image'}/>
                <div className={'textAboutCharacter'}>
                    <h3>id - {characterId}</h3>
                    <h2>{name} <small>({gender})</small></h2>
                    <h4>{status} - {species}</h4>
                    <h3 className={'color'}>Last known location:</h3>
                    <h3> {locationUrl.name}</h3>
                    <Link to={url + '/location'}>
                        <button>about location</button>
                    </Link>
                    <h3 className={'color'}>First seen in:</h3>
                    <h3>{episode.name}</h3>
                    <Link to={url + '/episode'}>
                        <button>about episode</button>
                    </Link>
                </div>
                <Route path={url + '/location'} render={() => {
                    getLocationFn(location)
                }}/>
                <Route path={url + '/episode'} render={() => {
                    getEpisodeFn(episode)
                }}/>
            </div>
        );
    } else {
        return (<div className={'aboutCharacter'}>
        </div>)
    }

}