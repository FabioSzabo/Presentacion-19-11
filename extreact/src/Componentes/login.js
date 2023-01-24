import '../css/Login.css'
function Login(){
    return(
        <body>
    <main>
        <div class="contenedor">
            <div class="CajaTrasera">
                <div class="CajaTraseraLogin">
                    <h3>
                        ¿Ya tienes una cuenta?
                    </h3>
                    <p>
                        Inicia sesión para entrar en la pagina
                    </p>
                    <button id="IniciarSesion">
                        Iniciar Sesión
                    </button>
                </div>
                <div class="CajaTraseraRegister">
                    <h3>
                        ¿Aún no tienes una cuenta?
                    </h3>
                    <p>
                        Regístrate para que puedas iniciar sesión
                    </p>
                    <button id="Register">
                        Registrarse
                    </button>
                </div>
            </div>

            <div class="ContenedorLoginRegister">
                <form class="FormLogin">
                    <h2>
                        Iniciar Sesión
                    </h2>
                    <input type="text" placeholder="Usuario" id="username"/>
                    <input type="password" placeholder="Contraseña" id="password"/>
                    <button id="BotonInicioSesion">Entrar</button>
                </form>
                <form class="FormRegister">
                    <h2>
                        Registrarse
                    </h2>
                    <input type="text" placeholder="Nombre completo"/>
                    <input type="text" placeholder="Correo Electronico"/>
                    <input type="text" placeholder="Usuario"/>
                    <input type="password" placeholder="Contraseña"/>
                    
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