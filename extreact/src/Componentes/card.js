import '../css/campus.css'
import pdf from '../pdf/matematicas.pdf'
function Card(props){
    return(
<div className="card">
  <img className="card-img-top" src={props.image}></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.text}</p>
  </div>
  <button class="btn btn-primary" type="button">
      <a className='enlace' href={pdf} download="matematicas.pdf">Descarga tu trabajo</a>
      </button>
</div>
    )
}
export default Card