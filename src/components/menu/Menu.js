export default
function Menu({pages}) {

    return (
        <div>
            {pages.map(link => <a href="#"> {link} </a>)}
        </div>
    );


}