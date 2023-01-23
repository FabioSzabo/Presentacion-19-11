import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import PagContacto from "../page/contacto"
import PagPrinc from "../page/principal"
import PagQuienes from "../page/quienesSomos"
import NivelInicial from "../page/NivelInicial"
import NivelPrimario from "../page/NivelPrimaria"
import NivelSecundario from "../page/NivelSecundario"
import PagCampus from "../page/login"
const Approuter = () =>{
return(
<Router>
    <switch>
        <Route exac path="/home" component={PagPrinc}/>
        <Route exac path="" component={PagPrinc}/>
        <Route exac path="/contacto" component={PagContacto}/>
        <Route exac path="/login" component={PagCampus}/>
        <Route exac path="/nosotros" component={PagQuienes}/>
        <Route exac path="/jardin" component={NivelInicial}/>
        <Route exac path="/primaria" component={NivelPrimario}/>
        <Route exac path="/secundaria" component={NivelSecundario}/>
    </switch>
</Router>
)
}
export default Approuter