import '../css/footer.css';
import logo from '../imagenes proyecto/LogoColegio.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
function final(){
    return(
        <footer>
        <div id="footer" className="footer color1">
          <div className="itemfooter">
          <img className="imagenfooter" src={logo} width="150px" height="150px"/>
        </div>
          <div className="itemfooter">
            <h3 id="textfooter" className="TextoFooter">Nuestras redes</h3>
              <div className="row align-items-end">
                <div className="col-4 col-s-4">
                  <a href="https://es-la.facebook.com/madredelujan/"><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div className="col-4 col-s-4">
                  <a href="https://www.instagram.com/explore/locations/235152569873606/instituto-nuestra-senora-de-lujan-tucuman-argentina/"><i className="fa-brands fa-instagram" ></i></a>
                </div>
                <div className="col-4 col-s-4">
                  <a href="https://www.youtube.com/channel/UCpIC6fTFfkpLc7TLRBx0fvA"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
          </div>
          <div className="itemfooter">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active linkfooter" aria-current="page" to={"/home"}>Inicio</Link>
              </li>
              <li className="nav-item"><Link className="nav-link linkfooter" to={"/nosotros"}>Nosotros</Link></li>
              <li className="nav-item">
                <Link className="nav-link linkfooter" to={"/contacto"}>Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linkfooter" to={"/login"}>Campus Virtual</Link>
              </li>
            </ul>
          </div>
        </div>
    </footer>
    )
}

export default final