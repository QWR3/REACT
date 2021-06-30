import {Link, Route} from 'react-router-dom'
import PostsToUsers from "../PostsToUsers/PostsToUsers";

export default function User({item: {id, name}, url}) {
    return (
        <div>
            <p>{id}-{name} <Link to={`${url}/${id}`}>get posts</Link></p>
            <Route path={`${url}/:id`} render={(props) => {
                let propsId = props.match.params.id
                if (id == propsId){
                    return <PostsToUsers id={propsId}/>
                }
            }}/>
        </div>
    );
}