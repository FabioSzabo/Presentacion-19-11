import '../css/sectionPrim.css'
function sectionPrim(props){
    return(
    <section>
    <div className="ContenedorImg">
      <img className="ImgPrincipal" src={props.img}/>
    </div>
    <div className="containerniveles">
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Inicial</h3>
              <a href="https://drive.google.com/file/d/11VaxXNoSYoHl89fbn6dFBdAOWSsuuieo/view?usp=sharing"><img src="C:\Users\fabio\Desktop\Proyecto final\Presentacion-19-11\imagenes proyecto\jardin.jpg" alt="imagenes proyecto\jardin.jpg" width="me-auto" height="100px"/></a>
            </div>
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Primario</h3>
              <a href="https://drive.google.com/file/d/11VaxXNoSYoHl89fbn6dFBdAOWSsuuieo/view?usp=sharing"><img src="C:\Users\fabio\Desktop\Proyecto final\Presentacion-19-11\imagenes proyecto\primaria.jpg" alt="imagenes proyecto\primaria.jpg" width="me-auto" height="100px"/></a>
            </div>
            <div className="nivel image card border-info">
              <h3 className="TextoCard">Nivel Secundario</h3>
              <a href="https://drive.google.com/file/d/11VaxXNoSYoHl89fbn6dFBdAOWSsuuieo/view?usp=sharing"><img src="C:\Users\fabio\Desktop\Proyecto final\Presentacion-19-11\imagenes proyecto\secundaria.jpg" alt="imagenes proyecto\secundaria.jpg" width="me-auto" height="100px"/></a>
            </div>
        </div>
</section>
)
}
export default sectionPrim