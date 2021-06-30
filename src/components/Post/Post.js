export default function Post ({item:{id,title}}) {
    return(
        <div>
        <p>{id}-{title}</p>
        </div>
    );
}