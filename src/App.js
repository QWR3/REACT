import './App.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {useEffect, useReducer} from "react";
import {getComments, getPosts, getUsers} from "./services/API";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

let reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            return {...state, users: action.users}
        case "ADD_POSTS":
            return {...state, posts: action.posts}
        case "ADD_COMMENTS":
            return {...state, comments: action.comments}
    }
}
export default function App() {
    let [state, dispatch] = useReducer(reducer, {users: null, posts: null, comments: null})
    let {users, posts, comments} = state
    useEffect(() => {
        getUsers.then(value => dispatch({type: "ADD_USERS", users: value.data}))
    }, [])
    useEffect(() => {
        getPosts.then(value => dispatch({type: "ADD_POSTS", posts: value.data}))
    }, [])
    useEffect(() => {
        getComments.then(value => dispatch({type: "ADD_COMMENTS", comments: value.data}))
    }, [])
    return (
        <Router>
            <div className={"App"}>
                <div className="main">
                    <ul>
                        <li>
                            <Link to={'/'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/users'}>users</Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>posts</Link>
                        </li>
                        <li>
                            <Link to={'/comments'}>comments</Link>
                        </li>
                    </ul>

                </div>
                <div className="body">
                    <Switch>
                        {comments && <Route path={'/comments'} render={(props) => <Comments items={comments}/>}/>}
                        {users && <Route path={'/users'} render={(props) => <Users items={users} url={props.match.url}/>}/>}
                        {posts && <Route path={'/posts'} render={(props) => <Posts items={posts} url={props.match.url}/>}/>}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}