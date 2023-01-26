import '../css/Contacto.css';
import {useRef,useEffect} from "react"

function Contacto(){
    function anchoPagina(){
        if(window.innerWidth > 850){
            CajaTraseraLogin.style.display = "block";
            CajaTraseraRegister.style.display= "block";
        }else{
            CajaTraseraRegister.style.display = "block";
            CajaTraseraRegister.style.opacity = "1";
            CajaTraseraLogin.style.display = "none";
            FormularioLogin.style.display = "block";
            FormularioRegister.style.display = "none";
            ContenedorLoginRegister.style.left = "0px";
        }
        
    }
    useEffect(()=>{
        window.addEventListener("resize",anchoPagina)
    })
const ContenedorLoginRegister=useRef();
const FormularioLogin=useRef();
const FormularioRegister=useRef();
const CajaTraseraLogin=useRef();
const CajaTraseraRegister=useRef();
function iniciarsesion(){
    if(window.innerWidth > 850){
        FormularioRegister.current.style.display = "none";
        ContenedorLoginRegister.current.style.left = "10px";
        FormularioLogin.current.style.display="block";
        CajaTraseraRegister.current.style.opacity = "1";
        CajaTraseraLogin.current.style.opacity="0";

    }else{
        FormularioRegister.current.style.display = "none";
        ContenedorLoginRegister.current.style.left = "0px";
        ContenedorLoginRegister.current.style.left = "0px";
        FormularioLogin.current.style.display="block";
        CajaTraseraRegister.current.style.display ="block";
        CajaTraseraLogin.current.style.display="none";

    }
    }

function register(){
    if(window.innerWidth > 850){
        FormularioRegister.current.style.display = "block";
        ContenedorLoginRegister.current.style.left = "410px";
    FormularioLogin.current.style.display="none";
    CajaTraseraRegister.current.style.opacity = "0";
    CajaTraseraLogin.current.style.opacity="1";

    } else{
        FormularioRegister.current.style.display = "block";
    ContenedorLoginRegister.current.style.left = "0px";
    FormularioLogin.current.style.display="none";
    CajaTraseraRegister.current.style.display = "none";
    CajaTraseraLogin.current.style.display="block";
    CajaTraseraLogin.current.style.opacity="1";  
    }}

    return(
        <body class="fondo">
        <main>
          <div class="contenedor">
              <div class="CajaTrasera">
                  <div ref={CajaTraseraLogin} class="CajaTraseraLogin">
                      <h3>
                          ¿Preferis que te contactemos?
                      </h3>
                      <p>
                          No te preocupes, deja tu contacto y nos comunicaremos con vos 
                      </p>
                      <button onClick={iniciarsesion} id="IniciarSesion">
                          Contacto
                      </button>
                  </div>
                  <div ref={CajaTraseraRegister} class="CajaTraseraRegister">
                      <h3>
                          ¿Tienes alguna consulta?
                      </h3>
                      <p>
                          Dejala aca y nos contactaremos con vos
                      </p>
                      <button onClick={register} id="Register">
                          Consulta
                      </button>
                  </div>
              </div>
    
              <div ref={ContenedorLoginRegister} class="ContenedorLoginRegister">
                  <form ref={FormularioLogin} class="FormLogin">
                      <h2>
                          Datos de contacto
                      </h2>
                      <input type="text" placeholder="Nombre" id="username"/>
                      <input type="text" placeholder="Numero de contacto" id="password"/>
                      <button id="Register">Continuar</button>
                  </form>
                  <form ref={FormularioRegister} class="FormRegister">
                      <h2>
                          Consulta
                      </h2>
                      <input type="text" placeholder="Nombre completo"/>
                      <input type="text" placeholder="Correo Electronico"/>
                      <input type="text" placeholder="Deja tu comentario"/>
                      
                      <button>Registrarse</button>
                  </form>
              </div>
          </div>
      </main>
      <br/><br/><br/>
        </body> 
    )
}
export default Contacto

