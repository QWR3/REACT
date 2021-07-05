import {Link, Route} from 'react-router-dom'
import Posts from "../posts/Posts";

export default function User({item: {id, name, email}, url}) {
    let urlForPost = url + '/' + id + 'posts/'
    return (
        <div>
            <h3><i>{id}-{name}-{email}</i>
                <Link to={{pathname: urlForPost, state: id}}>
                    <button className={'btn'}>get posts</button>
                </Link>
            </h3>
            <Route path={urlForPost} render={(props) => <Posts props={props}/>}/>
        </div>
    );
}