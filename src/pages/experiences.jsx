import Card from '../components/DirectoryCard.jsx'
import './experiences.css'

export default function Experience()
{
    return (
        <>
            <div id="background">
                <h2 className='title'>Experience</h2>
                
                <div id="downloadRes">
                    <p>You can find a more compact version of this information by simply downloading my resume:</p>
                    <a href="../../public/Resume.pdf" download><button>Download here</button></a>
                </div>

                <br></br>
                <br></br>

                <h4 className="sectionIntro">My earlier professional experience began with volunteering:</h4>
                <ul className="expbody">
                    <li>
                        While I was a part of the Surrey Air Cadets, I volunteered for a position
                        where I would collect donations for veterans in exchange for giving out poppies or bracelets.
                        This was a valuable experience as it brought me outside my comfort zone when I'd have to intiate 
                        conversations with strangers in order to explain the donation process.
                    </li>

                    <li>
                        I was a volunteer in my high schools library learning commons as well. My responsibilities were 
                        to shelve books, log returns and take-outs, as well as support the librarian while they were setting 
                        up displays to adverstise library events. I believe this was a valuable experience as I learned important 
                        organization skills that help me in my daily life. Knowing how difficult it can be to leave organization 
                        to the end, I now do my best to keep my world organized as I make changes to it instead of leaving it to the end.
                    </li>

                    <li>
                        Finally, I saw an interesting opportunity in my school email's inbox that requested volunteers to be Computing Science 
                        peer tutors for courses with topics such as intro CS courses, Discrete Math, Data Structures and Algorithms. I decided to 
                        apply for it and I found myself enjoying the opportunity to solidify my knowledege of those concepts by teaching others. I learned 
                        a great deal about communication through the training course, and overall, it was a position that was very much worth my time!
                    </li>
                </ul>

                <br></br>

                <h4 className='sectionIntro'>Later on, I finally found my first job!</h4>
                <ul className='expbody'>
                    <li>
                        I received my first job offer from a company named KidsInnovative. Their business involved working with public schools 
                        to deliver programs taught by facilitators, which is where I came in. I was assigned to facilitate two types of programs:
                        I supervised the learning of smaller classes of kids in block coding and... sewing. Sewing was strange for me as the job 
                        description only mentioned that the position involved teaching STEM topics, but I decided to try my best at it. Teaching 
                        block coding was fun, however, as I only wish I had discovered programming myself earlier. Being able to foster that as a 
                        hobby in a new generation was fulfilling, and I was happy to see their growth. I suggested improvements to their solutions in 
                        "Hour of Code" problems by, for example, teaching them what loops are so that they could avoid repeating the same lines of code in order.
                        The company's website can be found <a href="https://www.kidsinnovative.com/">here!</a>
                    </li>
                </ul>

                <h4 className='sectionIntro'>I hope to add more to this section soon, as well as personal projects that are worthy of me showcasing them here.</h4>
                
                <h2>You can also check out:</h2>
                <nav class="expnav">
                    <Card page="/about-me" source="" altText="About me page" title="About me"/>
                    <Card page="/my-story" source="" altText="My Story page" title="My Story"/>
                </nav>

                <h2>Or, you can go back to home:</h2>
                <nav class="expnav">
                    <Card page="/" source="" altText="Home page" title="Home"/>
                </nav>
            </div>
        </>
    )
}