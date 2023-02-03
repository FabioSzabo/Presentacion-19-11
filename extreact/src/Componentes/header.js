import '../css/header.css';
import logo from '../imagenes proyecto/LogoColegio.png'
import virgen from '../imagenes proyecto/Virgen.png'

function Titulo(){
    return(
          <div className="header">
          <div className="itemheader tituloColor ">
            <img className="imagentitle" src={logo} />
          </div>
          <div className="itemheader tituloColor " >
            <h1 className="textitle">Colegio Nuestra Señora del Lujan</h1>
            <h3 className="textsubtitle">"Servir formando"</h3>
          </div>
          <div className="itemheader tituloColor ">
            <img className="imagentitle" src={virgen} />  
          </div>
        </div>
    );
} 
export default Titulo