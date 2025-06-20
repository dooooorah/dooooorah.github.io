import './DirectoryCard.css'
import { Link } from 'react-router-dom'

export default function Card(props)
{
    return(
        <>
            <div id="box">
                <h4>{props.title}</h4>
                <Link to={props.page}><h4>{props.title}</h4>
                    <img src={props.source} alt={props.altText}></img>
                </Link>
            </div>
        </>
    )
}