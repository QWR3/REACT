import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts({item: id}) {
    console.log(id)
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            });
    }, []);
    console.log(posts)
    return (
        <div>
            {posts.map(value => <Post item={[value.title, value.body]}/>)}
        </div>
    );
}