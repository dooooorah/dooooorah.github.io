import emailjs from 'emailjs-com'
import sendIcon from '../assets/send.png'
import { useState } from "react"
import './formbox.css'

export default function Box()
{
    const [sendStatus, gotSent] = useState("empty");
    function send(event)
    {
        event.preventDefault()

        gotSent("sending")

        emailjs.sendForm('gmail', 'template_g2wvmbw', event.target, '0j2DZa8CTtI695UET').then(() => {
            gotSent("sent")
        }
        )
    }

    return (
        <div>

            {sendStatus == "empty" &&
            (<form onSubmit={send}>
                <textarea id="msg" name="message" placeholder="Type here to send a message..." required></textarea>
                <button type="submit"><img src={sendIcon} alt="send" id="sender"/></button>
            </form>)
            }

            {sendStatus == "sending" && (<h4 id="sending-load">Sending...</h4>)}

            {sendStatus == "sent" && 
            (<div id="success">
                <h4>Sent!</h4>
                <button onClick={()=>{gotSent("empty")}}>Send another message</button>
            </div>)}

        </div>
    )
}