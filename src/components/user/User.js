import Posts from "../posts/Posts";

export default function User({item}) {
    let [id, name, email] = item
    return (
        <h2>
            <div>{id}, {name}, {email}</div>
            <Posts item={id}/>
        </h2>


    );
}