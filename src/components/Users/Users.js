import User from "../User/User";

export default function Users ({items}) {
    return(
        <div>
            {items.map((value,index)=><User key={index} item={value}/>)}
        </div>
    );
}