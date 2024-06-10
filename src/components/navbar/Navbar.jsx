import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <Link to="/"><span>Aryshare</span></Link>
        </div> 
        <div className="right">
            <ul>
                <Link to=""><li>Docs</li></Link>
                <Link to=""><li>Blog</li></Link>
                <Link to="/pricing"><li>Pricing</li></Link>
                <Link to=""><li>Business Plan</li></Link>
                <Link to=""><li>Log In</li></Link>                
            </ul>
            <button>Get Started Now</button>
        </div>
    </div>
  ) 
}

export default Navbar;
