export default function User({item}) {
    let [id,name,email]=item
    return (
        <div>{id}, {name}, {email}</div>

    );
}