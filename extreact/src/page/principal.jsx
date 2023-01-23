import Titulo from "../Componentes/header";
import Navbar from "../Componentes/nav";
import Final from "../Componentes/footer";
import SectionPrincipal from "../Componentes/fotoPrincipal";
import TextoP from "../Componentes/textoPrincipal";
import NivelesPrinc from "../Componentes/nivelesPrincipal";

function PagPrinc(){
    return(
        <>
        <Titulo/>
        <Navbar/>
        <SectionPrincipal/>
        <TextoP/>
        <NivelesPrinc/>
        <Final/>
        </>
    )
}
export default PagPrinc