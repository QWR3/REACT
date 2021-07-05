import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";

export default function Posts({props}) {
    let url = props.match.path
    let id = props.location.state
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts(id).then(value => setPosts([...value.data]))
    }, [id])
    return (
        <div>
            {posts.map((value, index) => <Post key={index} item={value} url={url} state={id}/>)}
        </div>
    );
}