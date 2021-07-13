import './GenresList.css'

import {useEffect, useState} from "react";
import {getGenres} from "../../services/API";
import Genre from "../Genre/Genre";
import {useSelector} from "react-redux";

export default function GenresList () {
    const [genres,setGenres]=useState([])
    const doGenresVisible = useSelector(({doGenresVisible})=>doGenresVisible.value)

    const className = doGenresVisible?"burger-visible transition-duration":"burger-unvisible transition-duration"

    useEffect(() => {
        getGenres().then(value => {
            setGenres(value.data.genres)
        })
    },[])

    return(
        <div className={className}>
            {genres&&genres.map(value => <Genre key={value.id} item={value}/>)}
        </div>
    );
}