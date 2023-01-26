import Navbar from "../Componentes/nav";
import Titulo from "../Componentes/header";
import Final from "../Componentes/footer";
import SectionPrim from "../Componentes/sectionPrim";
import Videoprimaria from "../Componentes/videoprim";
function NivelPrimario(){
    return(
        <>
        <Titulo/>
        <Navbar/>
        <SectionPrim/>
        <Videoprimaria/>
        <Final/>
        </>
    )
}
export default NivelPrimario