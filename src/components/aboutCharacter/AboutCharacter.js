import './AboutCharacter.css'
import {useEffect, useState} from "react";
import {getEpisode, getLocation} from "../../services/API";

export default function AboutCharacter({character, getEpisodeFn, getLocationFn}) {
    let {id, name, status, species, gender, location:locationUrl, image, episode: episodeUrls} = character
    let [episode, setEpisode] = useState([]);
    let [location, setLocation] = useState([]);
    useEffect(()=>{
        getLocation(locationUrl.url).then(value => {
            setLocation(value.data)
        })
    },[locationUrl.url])
    useEffect(() => {
        getEpisode(episodeUrls[0]).then(value => {
            setEpisode(value.data)
        })
    }, [episodeUrls])
    return (
        <div className={'aboutCharacter'}>
            <img src={image} alt="" className={'image'}/>
            <div className={'textAboutCharacter'}>
                <h3>id - {id}</h3>
                <h2>{name} <small>({gender})</small></h2>
                <h4>{status} - {species}</h4>
                <h3 className={'color'}>Last known location:</h3>
                <h3> {locationUrl.name}</h3>
                <button onClick={() => {
                    getLocationFn(location)
                    // console.log(location)
                }}>about location
                </button>
                <h3 className={'color'}>First seen in:</h3>
                <h3>{episode.name}</h3>
                <button onClick={() => {
                    getEpisodeFn(episode)
                }}>about episode
                </button>
            </div>

        </div>
    );
}