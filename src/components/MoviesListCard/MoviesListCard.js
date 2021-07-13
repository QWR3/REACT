import './MoviesListCard.css'
import PosterPreview from "../PosterPreview/PosterPreview";

export default function MoviesListCard({movie}) {

    return (
        <div className={"moviesListCard"}>
            <PosterPreview path={movie.poster_path}/>
            <h3>{movie.original_title}</h3>
            <p className={"listCardOverview"}>{movie.overview}</p>
            <p>{movie.release_date}</p>
        </div>
    );
}