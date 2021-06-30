import User from "../User/User";

export default function Users ({items,url}) {
    return(
        <div>
            {items.map((value,index)=><User key={index} item={value} url={url}/>)}
        </div>
    );
}