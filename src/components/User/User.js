export default function User({item:{id,name}}) {
    return (
        <div>
            <p>{id}-{name}</p>
        </div>
    );
}