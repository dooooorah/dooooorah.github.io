import emailjs from 'emailjs-com'

export default function Box()
{
    function send(event)
    {
        event.preventDefault()

        emailjs.sendForm('gmail', 'template_g2wvmbw', event.target, '0j2DZa8CTtI695UET')
    }

    return
    {
        <form onSubmit={send}>
            <textarea name="message" placeholder="Type here to send a message..." required></textarea>
            <button type="submit"><img src='../assets/send.png' /></button>
        </form>
    }
}