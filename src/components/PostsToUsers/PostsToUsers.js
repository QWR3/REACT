import {useEffect, useState} from "react";
import {getPostsToUser} from "../../services/API";
import PostToUsers from "../PostToUsers/PostToUsers";

export default function PostsToUsers({id}) {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPostsToUser(id).then(value => setPosts(value.data))
    }, [id])
    return (
        <div>
            {posts.map((value, index) => <PostToUsers key={index} item={value}/>)}
        </div>
    );
}