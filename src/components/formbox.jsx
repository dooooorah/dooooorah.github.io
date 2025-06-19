import emailjs from 'emailjs-com'
import sendIcon from '../assets/send.png'
import './formbox.css'

export default function Box()
{
    function send(event)
    {
        event.preventDefault()

        emailjs.sendForm('gmail', 'template_g2wvmbw', event.target, '0j2DZa8CTtI695UET')
    }

    return (
        <form onSubmit={send}>
            <textarea id="msg" name="message" placeholder="Type here to send a message..." required></textarea>
            <button type="submit"><img src={sendIcon} alt="send"/></button>
        </form>
    )
}