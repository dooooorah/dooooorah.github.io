import Box from './formbox.jsx'
import './Footer.css'


export default function Footer()
{
    return (
        <>
            <div id="backdrop">
                <div id='disclaimer'>
                    <h2>Disclaimer:</h2>
                    <p>The code for this site is open-source and bound to the MIT license. It can be found <a href="https://github.com/dooooorah/dooooorah.github.io">here</a>. Please use if needed with respect to my privacy and work.</p>
                </div>

                <div id='contact'>
                    <h2>Contact me here:</h2>
                    <Box />
                </div>
            </div>
        </>
    )
}