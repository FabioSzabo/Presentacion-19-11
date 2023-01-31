import axios from "axios";

export const registro = async (alumno)=> {
    console.log(alumno);
    const respuesta = await axios.post("http://localhost:8000/alumnos/registro",alumno);
    return respuesta.data;
}
export const login = async (alumno)=> {
const respuesta  = await axios.post("http://localhost:8000/alumnos/ingreso",alumno);
return respuesta.data;
}

export const registrar = async (comentario)=>{
    const respuesta = await axios.post("http://localhost:8000/comentario", comentario);
    return respuesta.data
}