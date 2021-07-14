import './MovieInfo.css';

import {useEffect} from "react";
import {getMovieInfo} from "../../services/API";
import {useDispatch, useSelector} from "react-redux";
import {setMovieInfo} from "../../redux/movieInfo";
import PosterPreview from "../PosterPreview/PosterPreview";
import SimpleRating from "../StarsRating/StarsRating";
import GenresList from "../GenresList/GenresList";

export default function MovieInfo({id}) {
    const dispatch = useDispatch()
    const [movie, theme, doGenresVisible, isLoading] = useSelector(({
                                                                        movieInfo,
                                                                        theme,
                                                                        doGenresVisible,
                                                                        isLoading
                                                                    }) => [movieInfo, theme.value, doGenresVisible.value, isLoading.value])

    useEffect(() => {
        getMovieInfo(id).then(value => {
            dispatch(setMovieInfo(value.data))
        })
    }, [id])

    const className = doGenresVisible ? 'movieInfo-with-generes' : 'movieInfo-without-generes'
    console.log(doGenresVisible)
    console.log(isLoading)

    return (
        <div>
            {isLoading && <h1 className={`loading loading-${theme}`}>LOADING...</h1>}
            <div className={`movieInfo movieInfo-${theme}`}>
                <div className={className + ' movieInfoTextAndImage'}>
                    <div className={"movieInfoPoster"}>
                        <PosterPreview path={movie.poster_path}/>
                    </div>
                    <div className={"movieInfoText"}>
                        <h1>{movie.original_title}</h1>
                        <h3>({movie.release_date})</h3>
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
                <GenresList/>
            </div>
        </div>
    );
}