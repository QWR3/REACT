import './App.css';
import Users from "./components/users/Users";
import {getUsers, getPosts, getComments} from "./services/API";
import {useEffect, useState} from "react";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    let [posts, setPosts] = useState(null)

    let getPostsFn = ({id}) => {
        getPosts(id).then(value => setPosts(value.data));
    }
    let [comments, setComments] = useState(null)

    let getCommentsFn = (postId) => {
        console.log(postId)
        getComments(postId).then(value => setComments(value.data))
    }
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    // console.log()
    return (
        <div className={'father'}>
            <Users item={users} fn={getPostsFn}/>
            {posts && <Posts items={posts} fn={getCommentsFn}/>}
            {comments && <Comments items={comments}/>}

        </div>
    );
}

export default App;
// не забудьте встановити axios