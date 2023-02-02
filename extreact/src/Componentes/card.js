import '../css/campus.css'
function Card(props){
    return(
<div className="card">
  <img className="card-img-top"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.text}</p>
  </div>
</div>
    )
}
export default Card