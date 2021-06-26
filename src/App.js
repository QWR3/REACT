import './App.css';
import Users from "./components/users/Users";
import {getUsers,getPosts} from "./services/API";
import {useEffect, useState} from "react";
import Posts from "./components/posts/Posts";

function App() {
    let [posts, setPosts] = useState([])

    let getPostsFn = ({id}) => {
        console.log(`getPosts from user ${id}`);
        getPosts(id).then(value => setPosts(value.data));
    }
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div className={'father'}>
            <Users item={users} fn={getPostsFn}/>
            <Posts items={posts}/>
        </div>
    );
}
export default App;
