import Meter from '../components/meter.jsx';


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
            </div>
        </>
    )
}