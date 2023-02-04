import Navbar from '../Componentes/nav';
import Titulo from '../Componentes/header';
import Footer from '../Componentes/footer'
import SectionInicial from '../Componentes/sectionInicial';
import VideoJardin from '../Componentes/videojardin';
function NivelInicial(){
    return(
    <> 
    <Titulo />
    <Navbar />
    <SectionInicial />
    <VideoJardin/>
    <Footer />
    </>
    )
}

export default NivelInicial