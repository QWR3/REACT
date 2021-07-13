import './MovieInfo.css';

import {useEffect} from "react";
import {getMovieInfo} from "../../services/API";
import {useDispatch, useSelector} from "react-redux";
import {setMovieInfo} from "../../redux/movieInfo";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
import SimpleRating from "../StarsRating/StarsRating";

export default function MovieInfo({id}) {
    const dispatch = useDispatch()
    const movie = useSelector(({movieInfo}) => movieInfo)

    useEffect(() => {
        getMovieInfo(id).then(value => {
            dispatch(setMovieInfo(value.data))
        })
    }, [id])

    return (
        <div className={"movieInfo"}>
            <div className={"movieInfoPoster"}>
                <PosterPreview path={movie.poster_path}/>
            </div>
            <div className={"movieInfoText"}>
                <h1>{movie.original_title}</h1>
                <div className="movieInfoRating">
                    <SimpleRating value={movie.vote_average}/>
                </div>
                <h2>{movie.overview}</h2>
                <h3>genres:</h3>
                <ul>
                    {movie.genres && movie.genres.map(value => <li>{value.name}</li>)}
                </ul>
            </div>
        </div>
    );
}