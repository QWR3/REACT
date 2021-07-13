import './PosterPreview.css'
export default function PosterPreview({path}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500/"
    return (
        <div className={"posterPreview"}>
            <img src={baseUrl+path} alt=""/>
        </div>
    );
}