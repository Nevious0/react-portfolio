
import PostItem from "./PostItem"

const Portfolio = ({title}) => {
    return (
        <div>
            <div className="second-line">
            <h2>{title}</h2>
            </div>
            <PostItem/>      
        </div>
    )
}
Portfolio.defaultProps = {
title: "This is the Portfolio"
}
export default Portfolio
