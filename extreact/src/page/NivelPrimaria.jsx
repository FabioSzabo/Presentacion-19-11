import Navbar from "../Componentes/nav";
import Titulo from "../Componentes/header";
import Footer from "../Componentes/footer";
import SectionPrim from "../Componentes/sectionPrim";
import Videoprimaria from "../Componentes/videoprim";
function NivelPrimario(){
    return(
        <>
        <Titulo/>
        <Navbar/>
        <SectionPrim/>
        <Videoprimaria/>
        <Footer/>
        </>
    )
}
export default NivelPrimario