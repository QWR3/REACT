import './Location.css'

export default function location({location}) {
    let {id, name, created} = location
    return (
        <div className={'location'}>
            <h3>location - {id}</h3>
            <h3 className={'locationColor'}>name:</h3>
            <h3>{name}</h3>
            <h3 className={'locationColor'}>created:</h3>
            <h3>{created}</h3>
        </div>
    );
}