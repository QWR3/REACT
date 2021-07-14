import './MoviesList.css'

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setMovies} from "../../redux/movies";
import {getMovies, getSearch} from "../../services/API";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Page from "../Page/Page";
import GenresList from "../GenresList/GenresList";

export default function MoviesList() {
    const dispatch = useDispatch()
    const [movies, page, doGenresVisible, genre, search, theme] = useSelector(({
                                                                                   movies,
                                                                                   page,
                                                                                   doGenresVisible,
                                                                                   genre,
                                                                                   search,
                                                                                   theme
                                                                               }) => [movies, page.value, doGenresVisible.value, genre.value, search.value, theme.value])

    useEffect(() => {
        try {
            if (search) {
                getSearch(page, search).then(value => {
                    dispatch(setMovies(value.data))
                })
            } else {
                getMovies(page, genre).then(value => {
                    dispatch(setMovies(value.data));
                })
            }
        } catch (e) {
            console.log(e)
        }
    }, [page, genre, search])

    const className = doGenresVisible ? "moviesListWhenGenres transition-duration" : "moviesList transition-duration"


    if (theme === 'dark') {
    } else {
    }


    return (
        <div>
            <div className={className + ` moviesList-${theme}`}>
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