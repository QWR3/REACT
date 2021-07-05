import './Comment.css'
export default function Comment ({comment}) {
    return(
        <div className={'comment'}>
            <h3>{comment.id}{comment.name}</h3>
            <h4>{comment.body}</h4>
        </div>
    );
}