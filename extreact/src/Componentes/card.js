import '../css/campus.css'
function Card(props){
    return(
<div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.text}</p>
  </div>
</div>
    )
}
export default Card