import './MoviesList.css'

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setMovies} from "../../redux/movies";
import {getMovies} from "../../services/API";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Page from "../Page/Page";
import GenresList from "../GenresList/GenresList";

export default function MoviesList() {
    const dispatch = useDispatch()
    const [movies, page, doGenresVisible] = useSelector(({
                                                             movies,
                                                             page,
                                                             doGenresVisible
                                                         }) => [movies, page.value, doGenresVisible.value])

    useEffect(() => {
        getMovies(page).then(value => {
            dispatch(setMovies(value.data));
        })
    }, [page])

    const className = doGenresVisible?"moviesListWhenGenres transition-duration":"moviesList transition-duration"

    return (
        <div>
            <div className={className}>
                <Page/>
                <div className={"moviesListFlex"}>
                    {movies.results && movies.results.map(value => <MoviesListCard movie={value} key={value.id}/>)}
                </div>
                <Page/>
            </div>
            <GenresList/>
        </div>
    );
}