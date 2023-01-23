import '../css/Contacto.css';
import movimientocontacto from '../js/movimientocontacto';

function Contacto(){
    return(
        <body class="fondo">
        <main>
          <div class="contenedor">
              <div class="CajaTrasera">
                  <div class="CajaTraseraLogin">
                      <h3>
                          ¿Preferis que te contactemos?
                      </h3>4
                      <p>
                          No te preocupes, deja tu contacto y nos comunicaremos con vos 
                      </p>
                      <button id="IniciarSesion">
                          Contacto
                      </button>
                  </div>
                  <div class="CajaTraseraRegister">
                      <h3>
                          ¿Tienes alguna consulta?
                      </h3>
                      <p>
                          Dejala aca y nos contactaremos con vos
                      </p>
                      <button id="Register">
                          Consulta
                      </button>
                  </div>
              </div>
    
              <div class="ContenedorLoginRegister">
                  <form class="FormLogin">
                      <h2>
                          Datos de contacto
                      </h2>
                      <input type="text" placeholder="Nombre" id="username"/>
                      <input type="text" placeholder="Numero de contacto" id="password"/>
                      <button id="Register">Continuar</button>
                  </form>
                  <form class="FormRegister">
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