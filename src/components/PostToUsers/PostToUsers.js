import './PostToUsers.css'
export default function PostToUsers({item:{userId, id, title, body} }) {
    return (
        <div className={'PostToUsers'}>
            <p>userId={userId}</p>
            <p>{id}-{title}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
}