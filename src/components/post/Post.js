export default function Post ({item}) {
    let [title,body]=item
    return(
        <div>
            <h4>{title}</h4>
            <br/>
            <h5>{body}</h5>
            <hr/>
        </div>
    );
}