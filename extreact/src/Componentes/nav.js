import '../css/nav.css';
import { Link } from 'react-router-dom';
import { useRef,useEffect } from 'react';

function navbar(){
  const navbar =useRef()
  useEffect=()=>{
    if(localStorage.getItem("darkmode") === 1){
      navbar.current.classList.remove("color1");
      navbar.current.classList.add("navnew");
    }else{
      navbar.current.classList.remove("navnew");
      navbar.current.classList.add("color1");
    }
  }
    return(
        <nav ref={navbar} id="navbar" className="navbar color1">
      <div className="container-fluid">
       <Link className="navbar-brand" to="/home">Inicio</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" target="_blank" aria-current="page" to={"/nosotros"}  >Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Campus Virtual</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
} 
export default navbar;