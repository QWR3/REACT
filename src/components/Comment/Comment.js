export default function Comment({item}) {
    let {id, name} = item;
    return (
        <div>
            <p>{id}-{name}</p>
        </div>
    );
}
