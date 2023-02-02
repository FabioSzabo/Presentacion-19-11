import '../css/sectionPrincipal.css'
import { Link } from 'react-router-dom'
import jardin from '../imagenes proyecto/jardin.jpg'
import primaria from '../imagenes proyecto/primaria.jpg'
import secundaria from '../imagenes proyecto/secundaria.jpg'
function nivelesPrinc(){
    return(
        <section id="body" className="color2">
            <div className="containerniveles">
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Inicial</h3>
              <Link to={"/jardin"} ><img src={jardin} width="me-auto" height="100px" /></Link>
            </div>
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Primario</h3>
              <Link to={"/primaria"}><img src={primaria} width="me-auto" height="100px"/></Link>
            </div>
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Secundario</h3>
              <Link to={"/secundaria"}><img src={secundaria} width="me-auto" height="100px"/></Link>
            </div>
        </div>
        <br/><br/>
        </section>
    )
}
export default nivelesPrinc