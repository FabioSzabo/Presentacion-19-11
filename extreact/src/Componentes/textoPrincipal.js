import { useEffect, useRef } from 'react';
import React from 'react';
import '../css/sectionPrincipal.css';
import imagenes from './imagenes';
function TextoP (){
  const Referencias=useRef()
  useEffect=()=>{
    if(localStorage.getItem("darkmode") === 1){
      Referencias.current.classNameList.remove("colortext");
      Referencias.current.classNameList.add("colortextnew");
    }else{
      Referencias.current.classNameList.remove("colortextnew");
      Referencias.current.classNameList.add("colortext");
    }
  }
    return(
        <section id="body" className="color2">
        <div className=" central">
          <div className="columnmiddle carrusel">
            <div className="clearfix">
              <div id="carouselExampleControls" className="carousel slide className= col-md-6 float-md-end mb-3 ms-md-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={imagenes.niveles2} className="d-block w-100" alt="imagenes proyecto\Escáner_20171203 (12).png"/>
                  </div>
                  <div className="carousel-item">
                    <img src={imagenes.nosotros2} className="d-block w-100" alt="imagenes proyecto\Escáner_20171203 (14).png"/>
                  </div>
                  <div className="carousel-item">
                    <img src={imagenes.carrouselPrin} className="d-block w-100" alt="imagenes proyecto\Escáner_20171203 (13).png"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>          
              <p ref={Referencias} id="text" className="h4 colortext">
                El Instituto Nuestra Señora de Lujan surgió del intercambio de ideas entre el Pbro. Manuel Ballesteros González (primer representante legal  y Párroco de la Parroquia Nuestra Señora de Luján), y el Prof. Dr. Otto William Matheus sobre la educación. 
                Su fundación obedece a que Villa Luján, era una zona densamente poblada por familias de clase media y un gran número de jóvenes de ambos sexos que deseaban continuar sus estudios secundario y los colegios que existían entonces se encontraban muy alejados del barrio.
                Atendiendo estas necesidades, comenzó su tarea un 13 de marzo de 1961, siendo su primer representante legal el Pbro. Manuel Ballesteros González. 
                En el año 1966 el Pbro. José Ricardo Arbo Inglés, llevó a cabo una admirable labor de profundización y desarrollo, ya que bajo su dirección, la comunidad escolar y las obras parroquiales experimentaron un acelerado impulso
                En el año 1981 se hizo cargo de la Parroquia y de la representación legal del colegio el Pbro. Antonio Felix Alderete. Su preocupación y cariño por el colegio se evidenciaron en el mejoramiento del edificio escolar con la remodelación de la entrada del colegio, las oficinas administrativas y de servicios
                El Pbro. Juan Carlos Argañaraz, desde 1990 se preocupó por brindar apoyo espiritual a alumnos, padres y docentes a quienes instó a la lectura y puesta en práctica de las propuestas del documento “Educación y Proyecto de Vida”. Trajo consigo un impulso renovador que lo llevó a concretar mejoras edilicias importantes como los jardines de infantes, la sala de conferencias, el laboratorio de informática, las oficinas, la sala de audio y video y la actual fachada del edificio.
              </p>
            </div>
          </div> 
        <div className="columnside"> 
            <div className="container">
              <a href="https://www.youtube.com/@institutonuestrasenoradelu7928">
                <i className="bi bi-youtube logos" style={{fontSize:"75px"}}></i>
              <div className="overlay">
                <div className="text">Lujan TV</div>
              </div> 
              </a>
            </div>
            <div className="container">
              <a href="https://www.youtube.com/watch?v=r_jaqDeU8Ys&t=3290s">
                <i className="fa-solid fa-church logos" style={{fontSize:"75px"}}></i>
                <div className="overlay">
                <div className="text">Misa del mes</div>
              </div> 
            </a> 
            </div>
            <div className="container">
              <a href="http://localhost:3000/login">
                <i className="fa-solid fa-users logos" style={{fontSize:"75px"}} ></i>
                <div className="overlay">
                <div className="text">Campus virtual</div>
             </div> 
            </a> 
            </div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card border-info">
                  <div className="iconitos">
                    <i className="fa-solid fa-location-dot fa-2x"></i>
                    </div>
                     <div className="contenido">
                       <h3 className="TituloCard">UBICACION</h3>
                       <br/>
                       <p> ¿Queres conocer nuestra institucion? 
                         <br/> <br/>
                          Podes acercarte en los horarios estipulados por cualquier consulta 
                         <br/> <br/>
                         <iframe style={{border:0, width:"400px", height:"300px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25500.84255960173!2d-65.25210116747495!3d-26.811062144537104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bda3b6ff89aadd0!2sEscuela%20e%20Instituto%20Nuestra%20Se%C3%B1ora%20de%20Luj%C3%A1n!5e0!3m2!1ses!2sar!4v1675117155276!5m2!1ses!2sar"></iframe>
                      </p>
                    </div>
                  </div>
              </div>
              <div className="carousel-item">
                <div className="card border-info">
                <div className="iconitos">
                  <i className="fa-solid fa-school fa-2x"></i>
                  </div>
                  <div>
                 <h3 className="TituloCard">HORARIOS ESCOLARES</h3>
                <br/>
                <p> Nivel Inicial
                   Turno mañana y tarde 
                  <br/> <br/>
                   Nivel Primario
                   Por la mañana de 8 a 12 hrs
                  <br/> <br/>
                   Nivel secundario
                    Por la tarde de 14 a 19 hrs
                     <br/> <br/>
                    Para mas info acercarse a secretaria
                    </p>
                   </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          </div>
        </section>
    )
}
export default TextoP