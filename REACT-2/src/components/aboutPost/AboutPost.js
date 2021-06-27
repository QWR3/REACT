import './AboutPost.css'
export default function AboutPost ({items}) {
    console.log(items)
    let [userId,id,title,body]=items;
    return(
        <div className={'aboutPost'}>
            <h2>userId-{userId}, id-{id}</h2>
            <h3>title-{title}</h3>
            <h4>body-{body}</h4>
        </div>
    );
}