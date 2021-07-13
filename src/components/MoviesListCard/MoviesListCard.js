import './MoviesListCard.css'

import {Link} from 'react-router-dom'
import PosterPreview from "../PosterPreview/PosterPreview";
import SimpleRating from "../StarsRating/StarsRating";

export default function MoviesListCard({movie}) {

    return (
        <div className={"moviesListCard"}>
            <PosterPreview path={movie.poster_path}/>
            <Link to={`/${movie.id}`}><h3>{movie.original_title}</h3></Link>
            <p className={"listCardOverview"}>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <div className={"moviesListCardRating"}>
                <SimpleRating value={movie.vote_average} size={'small'}/>
            </div>
        </div>
    );
}