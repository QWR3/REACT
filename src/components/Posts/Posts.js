import Post from "../Post/Post";

export default function Posts ({items,url}) {
    return(
        <div>
                {items.map((value,index)=><Post key={index} item={value} url={url}/>)}
        </div>
    );
}