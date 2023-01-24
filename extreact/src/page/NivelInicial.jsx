import Navbar from '../Componentes/nav.js';
import Titulo from '../Componentes/header.js';
import Final from '../Componentes/footer.js'
import SectionInicial from '../Componentes/sectionInicial.js';
import Videojardin from '../Componentes/videojardin.js';

function NivelInicial(){
    return(
    <> 
    <Titulo />
    <Navbar />
    <SectionInicial />
    <Videojardin/>
    <Final />
    </>
    )
}

export default NivelInicial