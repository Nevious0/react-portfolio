import React, {useState, useEffect} from "react"
import Post from "./Post"

const Services = ({title}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    })
    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPosts(data)
    }
    return (
        <div className="wrapper" >
            <h3 className="text">{title}</h3>
        {posts.map((post) => (
            <Post title={post.title} body={post.body} key={post.id}/>
        ))}
        </div>
    )
}
Services.defaultProps = {
    title: "This is the service page"
}
export default Services
