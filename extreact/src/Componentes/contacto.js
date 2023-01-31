import '../css/Contacto.css';
import {useRef, useState,} from "react"
import { registrar } from '../Service/apiCall';

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

const [formValues,setFormValues] = useState ({
    email:'',
    firstName:'',
    coment:''
});
const manejoCambios =(event)=>{
    setFormValues({
        ...formValues,
        [event.target.name]:event.target.value
    })}
const enviar =(event)=>{
event.preventDefault();
const GuardarComentario=()=>{
    registrar(formValues).then(()=>{ console.log("Comentario registrado");})
    .catch((error)=>{console.log("Error al registrar comentario")})}
    GuardarComentario();
}
    return(
        <section className="fondo">
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
                  <form onSubmit={enviar} ref={FormularioRegister} className="FormRegister">
                      <h2>
                          Consulta
                      </h2>
                      <input type="email" placeholder="Correo Electronico" name='email' value={formValues.email} onChange={manejoCambios} required />
                      <input  type="text" placeholder="Nombre Completo" name='firstName' value={formValues.firstName} onChange={manejoCambios} required/>
                      <input type="text" placeholder="Deja tu consuta" name='coment' value={formValues.coment} onChange={manejoCambios} required />
                      
                      <button>Enviar</button>
                  </form>
              </div>
          </div>
      </main>
      <br/><br/><br/>
        </section> 
    )
}
export default Contacto

