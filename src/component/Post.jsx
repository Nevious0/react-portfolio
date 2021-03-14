import "./post.css"

const Post = ({title, body}) => {
    return (
        <div className="my-text">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Post
