export default function Post({item}) {
    let [title, body] = item
    console.log(item)
    return (
        <div>
            <h2>
                {title}
            </h2>
            <br/>
            <h4>
                {body}
            </h4>
            <hr/>
        </div>

    );
}