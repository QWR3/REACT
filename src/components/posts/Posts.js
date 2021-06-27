import "./Posts.css";
import Post from "../post/Post";

export default function Posts({items: posts,fn}) {
    return (
        <div className={'posts'}>
            <h2>Posts</h2>
            <hr/>
            {posts.map((value, index) => <Post key={index} item={[value.title, value.body, value.userId, value.id]} fn={fn}/>)}
        </div>
    );
}