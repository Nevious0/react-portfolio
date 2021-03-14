import "./PostItem.css"

const PostItem = () => {
    return (
        <div className="containers">
            <div className="my-post">
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-1.jpg' alt=""/>
                <h2>Web Development</h2>
                <p>It is a long established fact that a reader will be distracted</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-2.jpg' alt=""/>
                <h2>Web design</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-3.jpg' alt=""/>
                <h2>Coding</h2>
                <p>It is a long established fact that a reader will be distracted</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-4.jpg' alt=""/>
                <h2>Web technology</h2>
                <p>It is a long established fact that a reader will be distracted</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-5.jpg' alt=""/>
                <h2>Social Development</h2>
                <p>It is a long established fact that a reader will be distracted</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            <div className="my-portfolio">
                <img className="my-image1" src='./images-1/pexels-6.jpg' alt=""/>
                <h2>Mobile Development</h2>
                <p>It is a long established fact that a reader will be distracted</p><br/>
                <a className="read" href="#">Read More</a>
            </div>
            </div>
        </div>
    )
}

export default PostItem
