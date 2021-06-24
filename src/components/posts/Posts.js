import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setPosts(data)
            });
    }, []);
    console.log(posts)
    return (
        <div>
            {/*<Post item={posts}/>*/}
            {posts.map(value => <Post item={[value.title, value.body]}/>)}
        </div>
    );
}