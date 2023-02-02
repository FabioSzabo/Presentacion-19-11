import Navbar from '../Componentes/nav';
import Titulo from '../Componentes/header';
import Footer from '../Componentes/footer'
import SectionInicial from '../Componentes/sectionInicial';
import Videojardin from '../Componentes/videojardin';

function NivelInicial(){
    return(
    <> 
    <Titulo />
    <Navbar />
    <SectionInicial />
    <Videojardin/>
    <Footer />
    </>
    )
}

export default NivelInicial