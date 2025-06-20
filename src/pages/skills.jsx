import Meter from '../components/meter.jsx';
import Card from '../components/DirectoryCard.jsx'
import './skills.css'

export default function Skills()
{
    return (
        <>
            <div id="background">
                <h2 id="title">Skill Meter</h2>
                <p>Click each button to see how confident I am in each skill!</p>
                <div className="skill-wrapper">
                    <Meter />
                </div>
                
                
                <h2>You can also check out:</h2>
                <nav className="sknav">
                    <Card page="/about-me" source="" altText="About me page" title="About me"/>
                    <Card page="/experience" source="" altText="Experience page" title="Experience"/>
                    <Card page="/my-story" source="" altText="My Story page" title="My Story"/>
                </nav>

                <h2>Or, you can go back to home:</h2>
                <nav className="sknav">
                    <Card page="/" source="" altText="Home page" title="Home"/>
                </nav>
            </div>

        </>
    )
}