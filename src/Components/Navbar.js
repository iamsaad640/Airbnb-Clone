import logo from "../images/airbnb-logo.svg"

function Navbar() {
    return ( 
        <div className="navbarComponent" >
            <nav>
                <a href="/" rel=""><img src={logo} alt="airbnb logo"/></a>
            </nav>
        </div>
     );
}

export default Navbar;