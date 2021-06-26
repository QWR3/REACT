import "./Posts.css";
import Post from "../post/Post";

export default function Posts({items: posts}) {
    return (
        <div className={'posts'}>
            {posts.map((value, index) => <Post key={index} item={[value.title, value.body, value.userId]}/>)}
        </div>
    );
}