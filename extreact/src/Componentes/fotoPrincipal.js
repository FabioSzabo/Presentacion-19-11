import '../css/sectionPrincipal.css'
import princ from '../imagenes proyecto/20190508_104728.jpg'
import princ1 from '../imagenes proyecto/Escáner_20171203 (10).png'
import princ2 from '../imagenes proyecto/sec3.jpeg'
function sectionPrincipal (){
return(
    <section id="body" className="color2">
    <div className="introduccion">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={princ} className="d-block w-100" alt="20190820_103124.jpg"/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Una familia</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={princ1}/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Una hermandad</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={princ2}/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5">Una vocacion...</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
    </section>
)
} 
export default sectionPrincipal