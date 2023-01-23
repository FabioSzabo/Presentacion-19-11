import Navbar from '../Componentes/nav.js';
import Titulo from '../Componentes/header.js';
import Final from '../Componentes/footer.js'
import TextoQuienes from '../Componentes/textoQuienes.js';
import FotoQuienes from '../Componentes/fotoQuienes.js';
function PagQuienes (){
    return(
        <>
        <Titulo/>
        <Navbar/>
        <TextoQuienes/>
        <FotoQuienes/>
        <Final/>
        </>
    )
}
export default PagQuienes