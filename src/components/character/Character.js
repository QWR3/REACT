import './Character.css'

export default function Character({character, aboutCharacter, getEpisodeFn , getLocationFn}) {
    let {id, name, image} = character
    return (
        <div className={'character'}>
            <img src={image} className={'img'} alt=""/>
            <div className={'text'}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <button onClick={() => {
                    aboutCharacter(character)
                    getEpisodeFn(null)
                    getLocationFn(null)
                }}>about me
                </button>
            </div>
        </div>
    );
}