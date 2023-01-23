import '../css/sectionPrincipal.css'
import { Link } from 'react-router-dom'
import imagenes from './imagenes'
function nivelesPrinc(){
    return(
        <section id="body" class="color2">
            <div class="containerniveles">
            <div class="nivel image card border-info">
              <h3 class="TextoCard">Nivel Inicial</h3>
              <Link to={"/jardin"} ><img src={imagenes.niveles} width="me-auto" height="100px" /></Link>
            </div>
            <div class="nivel image card border-info">
              <h3 class="TextoCard">Nivel Primario</h3>
              <Link to={"/primaria"}><img src={imagenes.niveles1} width="me-auto" height="100px"/></Link>
            </div>
            <div class="nivel image card border-info">
              <h3 class="TextoCard">Nivel Secundario</h3>
              <Link to={"/secundaria"}><img src={imagenes.niveles2} width="me-auto" height="100px"/></Link>
            </div>
        </div>
        <br/><br/>
        </section>
    )
}
export default nivelesPrinc