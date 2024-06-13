import '../css/card.css'; 
import { Link } from 'react-router-dom';
function  Card(props)
{

    return(
        <div className="card" >
            <img src={props.ps.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.ps.title}</h5>
                <p className="card-text">{props.ps.description}</p>
                <p className="price">{props.ps.price}$</p>
                <Link className="btn btn-danger" to={`product/${props.ps.id}`} >BUY</Link>
            </div>
        </div>
    ); 
}

export default  Card ; 