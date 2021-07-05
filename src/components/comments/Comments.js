import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../comment/Comment";

export default function Comments({id}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(id).then(value => setComments([...value.data]))
    }, [id])
    return (
        <div>
            {comments.map((value, index) => <Comment key={index} comment={value}/>)}
        </div>
    );
}