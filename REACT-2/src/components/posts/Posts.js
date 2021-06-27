import './Posts.css'
import Post from "../post/Post";

export default function Posts({items:posts,fn}) {
    return (
        <div className={'posts'}>
            {posts && posts.map((value, index) => <Post key={index} items={[value.userId, value.id, value.title, value.body]} fn={fn}/>)}
        </div>
    );
}
