
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <h2>MASHOTA</h2>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="services"><li>Services</li></Link>
                <Link to="/portfolio"><li className="links">Portfolio</li></Link>
            </ul>
        </nav>
    )
}

export default Header
