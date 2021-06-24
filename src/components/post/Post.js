export default function Post({item}) {
    let [title, body, userId] = item
    return (
        <div>
            <h4>userId-{userId} title-{title}</h4>
            <br/>
            <h5>body-{body}</h5>
            <hr/>
        </div>
    );
}