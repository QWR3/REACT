export default function Post({item , fn}) {
    let [title, body, userId, id] = item
    return (
        <div>
            <p>Id-{id}</p>
            <p>userId-{userId}</p>
            <p>title-{title}</p>
            <p>body-{body}</p>
            <button onClick={() => {fn(id)}}>comments to this post</button>
            <hr/>
        </div>
    );
}