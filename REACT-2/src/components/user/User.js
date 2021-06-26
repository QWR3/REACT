export default function User({item,fn}) {
    let [id, name, email] = item
    return (
        <div>
            <p>HI from User {name}</p>
            <p>My id - {id}</p>
            <p>My email - {email}</p>
            <button onClick={()=>{fn({id})}}>My posts (click me)</button>
            {/*<Posts item={id}/>*/}
        </div>


    );
}