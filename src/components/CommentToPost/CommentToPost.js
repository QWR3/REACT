import './CommentToPost.css'
export default function CommentToPost({item}) {
    let {postId, id, name, email, body} = item
    return (
        <div className={'CommentToPost'}>
            <p>postId - {postId}</p>
            <p>{id} - {name}</p>
            <p>{email}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
}