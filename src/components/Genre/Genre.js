import './Ganre.css'

import {useDispatch} from "react-redux";
import {setGenre} from "../../redux/genre";

export default function Genre({item}) {
    const dispatch = useDispatch()

    return (
        <div className={'genre'}>
            <button className={'btnGenre'} onClick={() => {
                dispatch(setGenre(item.id))
            }}><h3>{item.name}</h3></button>
        </div>
    );
}