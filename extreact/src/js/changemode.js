import { createRef, useRef } from 'react';
import footer from '../Componentes/footer';
import textfooter from '../Componentes/footer'
import change from "../Componentes/header"
function ChangeMode(){
 change = createRef();
 footer= useRef();
 textfooter= useRef();
    change.onClick=()=>{
    textfooter.current.classList.remove("textofooter");
    textfooter.current.classList.add("textfooternew");
    footer.current.classList.remove("color1");
    footer.current.classList.add("navnew");}
}
export default ChangeMode