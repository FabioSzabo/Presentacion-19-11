import '../css/Contacto.css';
import {useRef,} from "react"

function Contacto(){
const ContenedorLoginRegister=useRef();
const FormularioRegister=useRef();
const Texto=useRef();
const Texto1=useRef();
const Texto2=useRef();
const CajaTraseraRegister=useRef();
function register(){
    if(window.innerWidth > 850){
        FormularioRegister.current.style.display = "block";
        ContenedorLoginRegister.current.style.left = "410px";
    CajaTraseraRegister.current.style.display = "0";
    Texto.current.style.display= "none";
    Texto1.current.style.display= "none";
    Texto2.current.style.display= "none";
}}
    return(
        <body className="fondo">
            <br/><br/><br/><br/><br/>
        <main>
          <div className="contenedor">
              <div className="CajaTrasera">
                  <div ref={CajaTraseraRegister} className="CajaTraseraRegister">
                      <h3 ref={Texto2}>
                          ¿Tienes alguna consulta?
                      </h3>
                      <p ref={Texto1}>
                          Dejala aca y nos contactaremos con vos
                      </p>
                      <button ref={Texto} onClick={register} id="Register">
                      Consulta
                      </button>
                  </div>
              </div>
              <div ref={ContenedorLoginRegister} className="ContenedorLoginRegister">
                  <form ref={FormularioRegister} className="FormRegister">
                      <h2>
                          Consulta
                      </h2>
                      <input type="text" placeholder="Nombre completo"/>
                      <input type="text" placeholder="Correo Electronico"/>
                      <input type="text" placeholder="Deja tu consulta"/>
                      
                      <button>Enviar</button>
                  </form>
              </div>
          </div>
      </main>
      <br/><br/><br/>
        </body> 
    )
}
export default Contacto

