import axios from "axios";

export const registro = async (alumno)=> {
    console.log(alumno);
    const respuesta = await axios.post("http://localhost:8000/alumnos",alumno);
    return respuesta.data;
}
export const login = async (alumno)=> {
const respuesta  = await axios.post("http://localhost:8000/alumnos",alumno);
return respuesta.data
}