import Card from '../components/DirectoryCard.jsx'
import './home.css'
import hi from '../assets/photos/hi.png'

export default function Home()
{
    return(
        <>
            <div id="background">
                <h2 className="title">Welcome to my Portfolio!</h2>


                <div id='homebody'>
                    <p id="bodytext">I'm Mohid, a student in Computing Science at Simon Fraser University, and this 
                        website is a project I worked on for a course I took called CMPT 276 : Intro to Software Engineering.
                        It contains some basic information about who I am in terms of hobbies, family, and my current life!
                        It also includes my professional experience, my story with programming, and 
                        where I believe I am with some of the skills I'm learning.
                        <br></br><br></br>
                        I hope you'll find my site interesting as I worked really hard on it.
                    </p>

                    <img src={hi} id="imgHi"></img>
                </div>

                <h2 className="title">Directory</h2>
                <nav id="homenav">
                    <Card page="/about-me" source="" altText="About me page" title="About me"/>
                    <Card page="/experience" source="" altText="Experience page" title="Experience"/>
                    <Card page="/my-story" source="" altText="My Story page" title="My Story"/>
                </nav>
            </div>
        </>
    )
}