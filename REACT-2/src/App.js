import './App.css';
import {useEffect, useState} from "react";
import {getPosts} from './services/API'
import Posts from "./components/posts/Posts";
import AboutPost from "./components/aboutPost/AboutPost";

function App() {
    let [post, setPost] = useState(null);

    let getPost = (userId, id, title, body) => {
        setPost([userId, id, title, body])
    }

    // console.log(post)


    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])
    return (
        <div className={'father'}>
            <Posts items={posts} fn={getPost}/>
            {post && <AboutPost items={post}/>}
        </div>
    );
}

export default App;
