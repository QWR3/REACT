import './PosterPreview.css'
import {useDispatch} from "react-redux";
import {setLoadingFalse} from "../../redux/isLoading";
import {useEffect} from "react";

export default function PosterPreview({path}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500/"

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoadingFalse())
    }, [path])
    return (
        <div className={"posterPreview"}>
            <img src={baseUrl + path} alt=""/>
        </div>
    );
}