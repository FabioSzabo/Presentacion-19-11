import '../css/Login.css'
import {useEffect, useRef, useState} from "react"
function Login(){

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

    const [formValue,setFormValues] =useState({
        email:'',
        password:'',
        firstname:'',
    });
    const handleChange =(event)=>{  
    setFormValues({
    ...formValue,
    [event.target.name]:event.target.value  //para evitar que se pierda algun valor en el caso de alterar uno solo//
  })}
    const handleSubmit =(event)=>{
     event.preventDefault(); //evitar que se reinicialice por defecto//
    //const GuardarUsuario=()=>{

    }
   //GuardarUsuario;

    return(
        <body>
    <main>
        <div class="contenedor">
            <div class="CajaTrasera">
                <div ref={CajaTraseraLogin} class="CajaTraseraLogin">
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
                <div ref={CajaTraseraRegister} class="CajaTraseraRegister">
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

            <div ref={ContenedorLoginRegister} class="ContenedorLoginRegister">
                <form ref={FormularioLogin} class="FormLogin">
                    <h2>
                        Iniciar Sesión
                    </h2>
                    <input type="text" placeholder="Usuario" id="username"/>
                    <input type="password" placeholder="Contraseña" id="password"/>
                    <button id="BotonInicioSesion">Entrar</button>
                </form>
                <form onSubmit={handleSubmit} ref={FormularioRegister} class="FormRegister">
                    <h2>
                        Registrarse
                    </h2>
                    <input type="email" placeholder="Correo Electronico" name='email' value={formValue.email} onChange={handleChange} required />
                    <input  type="password" name='password' value={formValue.password} onChange={handleChange} required/>
                    <input  type="text" name='Nombre' value={formValue.firstname} onChange={handleChange} required/>

                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <br/>
    <br/>
    <br/>
</body>
    )
}
export default Login