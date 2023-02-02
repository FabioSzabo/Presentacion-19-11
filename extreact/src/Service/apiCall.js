import axios from "axios";

export const registro = async (alumno)=> {
    console.log(alumno);
    const respuesta = await axios.post("http://localhost:8000/alumnos/registro",alumno);
    return respuesta.data;
}

const login = async(alumno)=>{
    const ingreso  = await axios.post("http://localhost:8000/alumnos/ingreso",alumno);
    console.log(ingreso.data)
    return ingreso.data
}
export{login}

export const registrar = async (comentario)=>{
    const respuesta = await axios.post("http://localhost:8000/comentario", comentario);
    return respuesta.data
}
