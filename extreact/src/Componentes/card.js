import '../css/campus.css'
import pdf from '../pdf/matematicas.pdf'
import ScrollLink from 'react-scroll/modules/mixins/scroll-link'
function Card(props){
    return(
<div className="card">
  <img className="card-img-top"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.text}</p>
    <div>
  <ScrollLink to="mywork" smooth={true}>
    <button className={`btn`}>
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="matematicas.pdf"> 
      Descarga tu trabajo
      </a>
    </button>
  </ScrollLink>
</div>
  </div>
</div>
    )
}
export default Card