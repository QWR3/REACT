export default function User({user}) {
    console.log(user)
    return (
        <div className={user}>{user}</div>

    );
}