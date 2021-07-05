import './App.css'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div className="buttons">
                <Link to={'/'}>
                    <button className={'btn'}>home</button>
                </Link>
                <Link to={'/users'}>
                    <button className={'btn'}>users</button>
                </Link>
            </div>
            <div className={'father'}>
                <div className={'user'}>

                    <Route path={'/users'} render={(props) => <Users url={props.match.url}/>}/>
                </div>
                <div className="comments">
                    <Route path={'/users/:userId' + 'posts/comments:id'}
                           render={(props) => <Comments id={props.match.params.id}/>}/>
                </div>
            </div>
        </Router>
    );
}