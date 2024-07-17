import { Link } from "react-router-dom";
import './HomeHeader.css'

function HomeHeader() {
    return (
        <header className="app-header">
            <Link className="app-header-item" to="/">Home</Link>
            <Link className="app-header-item" to="/about">About</Link>
        </header>
        
    );
}

export default HomeHeader;