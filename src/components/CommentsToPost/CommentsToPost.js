import {useEffect, useState} from "react";
import {getCommentsToPost} from "../../services/API";
import CommentToPost from "../CommentToPost/CommentToPost";

export default function CommentsToPost ({id}) {
    let [comments,setComments]=useState([])
    useEffect(() => {
        getCommentsToPost(id).then(value => setComments(value.data))
    },[id])
    return(
        <div>
            {comments && comments.map((value, index) => <CommentToPost key={index} item={value}/>)}
        </div>
    );
}
