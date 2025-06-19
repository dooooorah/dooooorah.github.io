import MLogo from '../assets/MLogo.png'
import { Link } from 'react-router-dom'
import './Header.css' 

function Header()
{
    return (
        <>
            <div id="outer">
            <div id="inner">
                <img src={MLogo} alt ="Mohid's Own Logo" id="logo"></img>
                <h1>Mohid's Personal Porfolio</h1>
                
                <nav id="navigation">
                    <a href="dooooorah.github.io"><img src="https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg" alt="home button" id="home"/></a>

                    <Link to="/about-me" className="h-button">About me</Link>
                    <Link to="/experience" className="h-button">Experience</Link>
                    <Link to="/my-story" className="h-button">My Story</Link>
                    <Link to="/skills" className="h-button">Skill Meter</Link>
                </nav>
            </div>
            </div>
        </>
    )
}

export default Header