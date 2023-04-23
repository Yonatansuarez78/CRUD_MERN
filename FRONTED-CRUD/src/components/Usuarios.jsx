import React, { useEffect, useState } from "react";
import axios from "axios";

const Usuarios = () => {
  const URL = "http://localhost:3000/usuarios";

  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState();

  const [operacion, setOperacion] = useState(0);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const respuesta = await axios.get(URL);
      setUsuarios(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = async(op, id, nombre, apellido, telefono)=>{
    setId("")
    setNombre("")
    setApellido("")
    setTelefono("");
    if(op === 1){
      setOperacion(1);
    }else if(op === 2){
      setOperacion(2);
      setId(id);
      setNombre(nombre);
      setApellido(apellido);
      setTelefono(telefono);
    }
  }

  const opera = async()=>{
    if(operacion === 1){
      await axios.post(URL, { nombre: nombre, apellido: apellido, telefono: telefono});
      location.reload();
    }else if(operacion === 2){
      await axios.put(`${URL}/${id}`, { nombre: nombre, apellido: apellido, telefono: telefono})
      location.reload();
    }
  }


  const eliminarUsuario = async(idE)=>{
    try {
        const resultado = await axios.delete(`${URL}/${idE}`);
        console.log(resultado);
        location.reload();
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
    <div className="container mt-1">
        <button className="btn btn-primary d-flex mx-auto w-50 justify-content-center my-2" onClick={()=> openModal(1)} data-bs-toggle="modal" data-bs-target="#exampleModal">Crear</button>
        <table className="table border">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuarios)=>(
                    <tr key={usuarios._id}>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.apellido}</td>
                        <td>{usuarios.telefono}</td>
                        <td>
                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> openModal(2, usuarios._id, usuarios.nombre, usuarios.apellido, usuarios.telefono)}>Actualizar</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=> eliminarUsuario(usuarios._id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="m-2">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <br />
                <div className="m-2">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" placeholder="Apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <br />
                <div className="m-2">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" id="telefono" placeholder="Telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={()=> opera()}>Guardar</button>
            </div>
            </div>
        </div>
        </div>
    </div>

    </>
  );
};

export default Usuarios;
