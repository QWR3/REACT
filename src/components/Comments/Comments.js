import Comment from "../Comment/Comment";

export default function Comments ({items}) {
    // console.log(items)
    return(
        <div>
            {items.map((value,index)=><Comment key={index} item={value}/>)}
        </div>
    );
}