import './DirectoryCard.css'

export default function Card(props)
{
    return(
        <>
            <div id="box">
                <h4>{props.title}</h4>
                <a href={props.page}>
                    <img src={props.source} alt={props.altText}></img>
                </a>
            </div>
        </>
    )
}