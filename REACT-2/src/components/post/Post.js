export default function Post({item}) {
    let [title, body, userId] = item
    return (
        <div>
            <p>id-{userId}</p>
            <p>title-{title}</p>
            <p>body-{body}</p>
            <hr/>
        </div>
    );
}