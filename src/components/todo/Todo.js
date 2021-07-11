export default function Todo({title, description}) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <hr/>
        </div>
    );
}