import Card from '../components/DirectoryCard.jsx'
import './home.css'

export default function Home()
{
    return(
        <>
            <div id="background">
                <h2>Welcome to my Portfolio!</h2>
                <p>I'm Mohid, a student in Computing Science at Simon Fraser University, and this 
                    website is a project I worked on for a course I took called CMPT 276 : Intro to Software Engineering.
                    It contains some basic information about who I am, my professional experience, my story with programming, and 
                    where I believe I am with some of the skils I'm learning!
                    <br></br><br></br>
                    I hope you'll find my site interesting as I worked really hard on it...
                </p>

                <h2>Directory</h2>
                <nav>
                    <Card page="/about-me" source="" altText="About me page" title="About me"/>
                    <Card page="/experience" source="" altText="Experience page" title="Experience"/>
                    <Card page="/my-story" source="" altText="My Story page" title="My Story"/>
                </nav>
            </div>
        </>
    )
}