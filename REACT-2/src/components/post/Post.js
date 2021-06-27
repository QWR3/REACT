import './Post.css'
export default function Post({items, fn}) {
    let [userId,id,title,body] = items

    return (
        <div className={'post'}>
            <p><strong>{id}</strong> - {title}</p>
            <button className={'btn'} onClick={()=>{fn(userId,id,title,body)}}>about(click me)</button>
        </div>
    );
}