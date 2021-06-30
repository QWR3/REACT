import {Link, Route} from 'react-router-dom'
import CommentsToPost from "../CommentsToPost/CommentsToPost";

export default function Post({item: {id, title}, url}) {
    return (
        <div>
            <p>{id}-{title} <Link to={`${url}/${id}`}>get comments</Link></p>
            <Route path={`${url}/:id`} render={(props) => {
                let propsId = props.match.params.id
                if (propsId == id) {
                    return <CommentsToPost id={propsId}/>
                }
            }}/>
        </div>
    );
}