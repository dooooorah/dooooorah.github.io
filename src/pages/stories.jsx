import Card from '../components/DirectoryCard.jsx'
import './stories.css'

export default function Stories()
{
    return (
        <>
            <div id="background">
                <h2 className="title">My story with programming</h2>

                <p id="storybody">
                    My story with programming began with Scratch, a basic block coding application that is popularly
                    used. I always found it fun, even in elementary school when we were required to code on iPads. 
                    Being able to see what you made come to life and do some of the craziest things was always so rewarding!
                    <br></br><br></br>
                    After graduating from elementary school, programming wasn't a part of my life again until I took a course 
                    in high school called Computer Science 11. We learned basic Java, even making a spaceship game out of it with 
                    an application called Greenfoot. It was so fun, and I realized programming is what I want to do in my career. It 
                    feels like such a vibrant job to constantly be creating software that can be used by anyone. The potential salary is 
                    also not to be forgotten.
                    <br></br><br></br>
                    Experiencing software development through this portfolio project has really inspired me to start building my own projects 
                    simply because building is so fun.
                </p>

                <img src="https://www.oracle.com/webfolder/technetwork/tutorials/OracleAcademy/GreenfootSelfStudyV1/images/L1S3_World.png" alt="A picture of the Greenfoot UI"></img>


                <h2>You can also check out:</h2>
                <nav class="stonav">
                    <Card page="/about-me" source="" altText="About me page" title="About me"/>
                    <Card page="/experience" source="" altText="Experience page" title="Experience"/>
                </nav>

                <h2>Or, you can go back to home:</h2>
                <nav class="stonav">
                    <Card page="/" source="" altText="Home page" title="Home"/>
                </nav>
            </div>
        </>
    )
}

