import banner from "../images/banner-grid.png"

function Hero() {
    return ( 
        <div className="hero">
            <img className="hero--banner" src={banner} alt="banner" />
            <div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
     );
}

export default Hero;