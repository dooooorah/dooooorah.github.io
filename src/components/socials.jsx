import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import './socials.css'


export default function Socials()
{
    return (
        <>
            <div class="container">
                <a href="https://github.com/dooooorah"><img src={github} alt="github logo" class="logo"></img></a>
                <a href="https://www.instagram.com/dihom42/"><img src={instagram} alt="instagram logo" class="logo"></img></a>
                <a href="https://www.linkedin.com/in/mohid-rashid-b85714339/h"><img src={linkedin} alt="linkedin logo" class="logo"></img></a>
                <a href="https://www.youtube.com/channel/UC6mhsHBdVyV5nvcnqwztNLg"><img src={youtube} alt="youtube logo" class="logo"></img></a>
            </div>
        </>
    )
}