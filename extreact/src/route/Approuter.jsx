import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import PagContacto from "../page/contacto"
import PagPrinc from "../page/principal"
import PagQuienes from "../page/quienesSomos"
import NivelInicial from "../page/NivelInicial"
import NivelPrimario from "../page/NivelPrimaria"
import NivelSecundario from "../page/NivelSecundario"
import PagCampus from "../page/login"
import PagMat from "../page/campus"
const Approuter = () =>{
return(
<Router>
    <Switch>
        <Route exact path="/home" component={PagPrinc}/>
        <Route exact path="/campus" component={PagMat}/>
        <Route exact path="/" component={PagPrinc}/>
        <Route exact path="/contacto" component={PagContacto}/>
        <Route exact path="/login" component={PagCampus}/>
        <Route exact path="/nosotros" component={PagQuienes}/>
        <Route exact path="/jardin" component={NivelInicial}/>
        <Route exact path="/primaria" component={NivelPrimario}/>
        <Route exact path="/secundaria" component={NivelSecundario}/>
    </Switch>
</Router>
)
}
export default Approuter