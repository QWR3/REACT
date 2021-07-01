import {Link, Route} from 'react-router-dom'
import './Character.css'
import AboutCharacter from "../aboutCharacter/AboutCharacter";

export default function Character({character, getEpisodeFn, getLocationFn, url}) {
    let {id, name, image} = character
    return (
        <div className={'character'}>
            <img src={image} className={'img'} alt=""/>
            <div className={'text'}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <Link to={`${url}/id=${id}/about`}>
                    <button>about me</button>
                </Link>
                <Route path={`${url}/id=:id/about`} render={(props) => {

                    if (id == props.match.params.id) {
                        getEpisodeFn(null)
                        getLocationFn(null)
                        return <AboutCharacter id={props.match.params.id} getEpisodeFn={getEpisodeFn}
                                               getLocationFn={getLocationFn} url={props.match.url}/>
                    }
                }}/>
            </div>
        </div>
    );
}