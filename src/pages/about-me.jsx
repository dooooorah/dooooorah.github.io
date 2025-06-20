import './about-me.css'
import catBook from '../assets/photos/book.jpg'
import catEyes from '../assets/photos/wideyes.jpg'
import Card from '../components/DirectoryCard.jsx'

export default function About()
{
    return (
        <>
            <div id="background">
                <h2 class="title">About me (Mohid)!</h2>
                <p id="aboutbody">As I mentioned before, I am currently a Computing Science student at Simon Fraser University.
                    During my studies, I like to engage in my hobbies! I'm passionate about fitness, gaming,
                    and spending time with my cats. Although life tends to get stressful at times, the gym is a great way to 
                    get yourself too tired to worry about stuff like that. Plus, who doesn't want muscles?
                    <br></br><br></br>
                    Gaming is also a great distraction, but I definitely have to be careful with it. Sometimes it 
                    can do its job a little too well. Some of my favourite games are Hollow Knight, Celeste, and
                     Cuphead. You might recognize them as a trio of some of the more difficult types of games. I really 
                     enjoy the feeling of succeeding after many attempts because it makes it feel that much more rewarding.
                     I know not many things will ever come easy in life, so I try to build persistence any way I know how.
                    <br></br><br></br>
                    I have two cats. The one I was holding in the homepage is Honey, and the other is named Chottu (it means
                    small person in my native language. He was a smaller cat). 

                    <div id="photos">
                        <figure>
                            <img src={catBook} alt="an orange cat resting on a book" class="catfoto"></img>
                            <figcaption>This is Chottu!</figcaption>
                        </figure>

                        <figure>
                            <img src={catEyes} alt="a cat with wide eyes open" class="catfoto"></img>
                            <figcaption>This is Honey!</figcaption>
                        </figure>
                    </div>
                    
                    <br></br>
                    Although they can be rude at times, I love capturing moments 
                    where they're really special and sweet. Like in this video I'm about to link <a href="https://youtu.be/ar1yEt2Sem0">here.</a>
                </p>
                
                <h2>Also, if you haven't already, check out:</h2>
                <nav class="aboutnav">
                    <Card page="/experience" source="" altText="Experience page" title="Experience"/>
                    <Card page="/my-story" source="" altText="My Story page" title="My Story"/>
                </nav>

                <h2>Or, you can go back to home:</h2>
                <nav class="aboutnav">
                    <Card page="/" source="" altText="Home page" title="Home"/>
                </nav>
            </div>
        </>
    )
}