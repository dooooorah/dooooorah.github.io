import './DirectoryCard.css'

export default function Card(props)
{
    return(
        <>
            <a href={props.page}>
                <div id="box">
                    <img src={props.source} alt={props.altText}></img>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </a>
        </>
    )
}