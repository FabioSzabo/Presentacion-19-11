import '../css/sectionSec.css'
import imagenes from './imagenes'
function sectionSec(props){
    return(
      <section classNameName='color2'>
      <h2 className="tituloquienes">Nivel Primario</h2>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
<div classNameName="carousel-inner">
  <div className="carousel-item active">
    <img src={imagenes.sec1} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={imagenes.sec2} className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src={imagenes.sec3} className="d-block w-100" alt="..."/>
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
          <p id="text" className="h4 colortext">
            El Instituto Nuestra Señora de Lujan surgió del intercambio de ideas entre el Pbro. Manuel Ballesteros González (primer representante legal  y Párroco de la Parroquia Nuestra Señora de Luján), y el Prof. Dr. Otto William Matheus sobre la educación. 
            Su fundación obedece a que Villa Luján, era una zona densamente poblada por familias de clase media y un gran número de jóvenes de ambos sexos que deseaban continuar sus estudios secundario y los colegios que existían entonces se encontraban muy alejados del barrio.
            Atendiendo estas necesidades, comenzó su tarea un 13 de marzo de 1961, siendo su primer representante legal el Pbro. Manuel Ballesteros González. 
            En el año 1966 el Pbro. José Ricardo Arbo Inglés, llevó a cabo una admirable labor de profundización y desarrollo, ya que bajo su dirección, la comunidad escolar y las obras parroquiales experimentaron un acelerado impulso
            En el año 1981 se hizo cargo de la Parroquia y de la representación legal del colegio el Pbro. Antonio Felix Alderete. Su preocupación y cariño por el colegio se evidenciaron en el mejoramiento del edificio escolar con la remodelación de la entrada del colegio, las oficinas administrativas y de servicios
            El Pbro. Juan Carlos Argañaraz, desde 1990 se preocupó por brindar apoyo espiritual a alumnos, padres y docentes a quienes instó a la lectura y puesta en práctica de las propuestas del documento “Educación y Proyecto de Vida”. Trajo consigo un impulso renovador 
            que lo llevó a concretar mejoras edilicias importantes como los jardines de infantes, la sala de conferencias, el laboratorio de informática, las oficinas, la sala de audio y video y la actual fachada del edificio.
          </p>
        </div>
      <br/><br/>
    </section>
    )
}
export default sectionSec