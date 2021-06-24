export default function Post ({item}) {
    let [title,body]=item
    return(
        <div>
            <hr/>
            <h4>{title}</h4>
            <br/>
            <h5>{body}</h5>
            <hr/>
        </div>
    );
}