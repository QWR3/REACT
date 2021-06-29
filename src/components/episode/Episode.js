import './Episode.css'

export default function Episode({episode}) {
    let {id, name, air_date} = episode
    return (
        <div className={'episode'}>
            <div className={'episodeText'}>
                <h3>episode - {id}</h3>
                <h3 className={'episodeColor'}>name:</h3>
                <h3>{name}</h3>
                <h3 className={'episodeColor'}>date:</h3>
                <h3>{air_date}</h3>
            </div>

        </div>
    );
}