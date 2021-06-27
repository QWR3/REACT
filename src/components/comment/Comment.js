import './Comment.css'
export default function Comment({items}) {
    let {postId, id, name, email, body} = items
    // console.log(postId, id, name, email, body)
    // console.log(items)
    return (
        <div className={'comment'}>
            <p>id - {id}</p>
            <p>postId - {postId}</p>
            <p>name - {name}</p>
            <p>email - {email}</p>
            <p>body - {body}</p>
            <hr/>
        </div>
    );
}