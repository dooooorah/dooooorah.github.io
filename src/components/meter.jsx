import './meter.css';
import {useState} from "react"

export default function Meter() 
{
    const [skill, switchSkill] = useState("none")

    return (
    <>
        <button onClick={()=> {switchSkill("React")}}>React</button>
        <button onClick={()=> {switchSkill("DSA")}}>DSA</button>
        <button onClick={()=> {switchSkill("Git")}}>Git</button>
        <button onClick={()=> {switchSkill("Github")}}>Github</button>
        <button onClick={()=> {switchSkill("Python")}}>Python</button>

        <div id="meter">
            {skill == "none" && (<div id="none"><p>0%</p></div>)}
            {skill == "React" && (<div id="React"><p>40%</p></div>)}
            {skill == "DSA" && (<div id="DSA"><p>20%</p></div>)}
            {skill == "Git" && (<div id="Git">30%</div>)}
            {skill == "Github" && (<div id="Github">50%</div>)}
            {skill == "Python" && (<div id="Python">40%</div>)}
        </div>
    </>
    )
}
