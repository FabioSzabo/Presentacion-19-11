import '../css/Login.css'
import {useEffect, useRef, useState} from "react"
import { registro, login } from '../Service/apiCall';
function Login(){


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

    const [formValues,setFormValues] =useState({  //register
        email:'',
        password:'',
        firstname:''
    });
    const handleChange =(event)=>{  
    setFormValues({
    ...formValues,
    [event.target.name]:event.target.value  //para evitar que se pierda algun valor en el caso de alterar uno solo//
  })}
    const handleSubmit =(event)=>{
     event.preventDefault();
    const GuardarUsuario=()=>{
        registro(formValues).then(()=>{
            console.log("Registrado");}).catch((error)=>alert("Error al registrar"))
        }
        GuardarUsuario();
    }
    const [formValue,setFormValue] =useState({  //login
        email:'',
        password:''
    });
    const manejoCambios =(event)=>{  
        setFormValue({
        ...formValue,
        [event.target.name]:event.target.value  //para evitar que se pierda algun valor en el caso de alterar uno solo//
      })}

    const enviar =(event)=>{
        event.preventDefault();
        console.log(login)
       const ObtenerAlumno=()=>{
        login(formValue).then(()=>{
               console.log("Ingresado");}).catch((error)=>alert("Alumno no registrado"))
       }
           ObtenerAlumno();
       }

    return(
        <section>
    <main>
        <div className="contenedor">
            <div className="CajaTrasera">
                <div ref={CajaTraseraLogin} className="CajaTraseraLogin">
                    <h3>
                        ¿Ya tienes una cuenta?
                    </h3>
                    <p>
                        Inicia sesión para entrar en la pagina
                    </p>
                    <button onClick={iniciarsesion} id="IniciarSesion">
                        Iniciar Sesión
                    </button>
                </div>
                <div ref={CajaTraseraRegister} className="CajaTraseraRegister">
                    <h3>
                        ¿Aún no tienes una cuenta?
                    </h3>
                    <p>
                        Regístrate para que puedas iniciar sesión
                    </p>
                    <button onClick={register} id="Register">
                        Registrarse
                    </button>
                </div>
            </div>

            <div ref={ContenedorLoginRegister} className="ContenedorLoginRegister">
                <form onSubmit={enviar} ref={FormularioLogin} className="FormLogin">
                    <h2>
                        Iniciar Sesión
                    </h2>
                    <input type="email" placeholder="Correo Electronico" name='email' value={formValue.email} onChange={manejoCambios} required />
                    <input  type="password" placeholder="Password" name='password' value={formValue.password} onChange={manejoCambios} required/>
                    <button >Entrar</button>
                </form>
                <form onSubmit={handleSubmit} ref={FormularioRegister} className="FormRegister">
                    <h2>
                        Registrarse
                    </h2>
                    <input type="email" placeholder="Correo Electronico" name='email' value={formValues.email} onChange={handleChange} required />
                    <input  type="password" placeholder="Password" name='password' value={formValues.password} onChange={handleChange} required/>
                    <input  type="text" placeholder="First Name" name='firstname' value={formValues.firstname} onChange={handleChange} required/>

                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <br/>
    <br/>
    <br/>
</section>
    )
}
export default Login