import Card from '../Componentes/card';
import '../css/campus.css';
import mat from '../imagenes proyecto/mtematicas.png'
function Campus() {
    return(
        <section>
        <div className='containerniveles'>
<Card className="nivel bi bi-calculator-fill" src={mat} name="Matematicas" text="La matematica me hace dolor La enseñanza de la Matemática tiene como propósito fundamental desarrollar la capacidad para pensar, razonar, comunicar, aplicar y valorar las relaciones entre las ideas y los fenómenos reales.la cabeza"/>
<Card className="nivel" name="Ingles" text="Cuando se comienza a aprender inglés, siempre hay quien da su opinión sobre cómo hacerlo. Algunos dicen que se debe estudiar mucho tiempo, otros que en poco tiempo se logra, que se debe tomar un curso avanzado o que empezar de cero es lo mejor. Inglés tambien"/>
<Card className="nivel" name="Informatica" text="Automatizar todo tipo de procesos y sistemas para gestionar datos: Con lo que conseguimos aumentar enormemente la productividad, la velocidad en la creación y manejo de tareas y además evitamos muchos errores humanos"/>       
</div>  
        </section>
    )
}
export default Campus
