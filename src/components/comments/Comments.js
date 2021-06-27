import './Comments.css'
import Comment from "../comment/Comment";

export default function Comments ({items}) {
    return(
        <div className={'comments'}>
            <h2>Comments</h2>
            <hr/>
            {items.map((value,index)=><Comment key={index} items={value} />)}
        </div>
    );
}