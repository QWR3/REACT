import Post from "../Post/Post";

export default function Posts ({items}) {
    return(
        <div>
            {items.map((value,index)=><Post key={index} item={value}/>)}
        </div>
    );
}