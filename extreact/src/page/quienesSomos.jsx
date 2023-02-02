import Navbar from '../Componentes/nav';
import Titulo from '../Componentes/header';
import Footer from '../Componentes/footer'
import TextoQuienes from '../Componentes/textoQuienes';
import FotoQuienes from '../Componentes/fotoQuienes';
function PagQuienes (){
    return(
        <>
        <Titulo/>
        <Navbar/>
        <TextoQuienes/>
        <FotoQuienes/>
        <Footer/>
        </>
    )
}
export default PagQuienes