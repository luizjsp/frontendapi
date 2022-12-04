import  React, { useEffect, useState } from "react";
import api from "./services/api";


export default function App() {
 
   const [listaPacientes, setListaPacientes] = useState([]);


  useEffect( () => {
        loadPacientes();
    
    //console.log(listaPacientes)

  }, [""]);

  const loadPacientes = async () => {
    const result = await api.get("/listarPacientes");
    setListaPacientes(result.data);

  }




  return (
    
    <div className="App">
      {
      
      listaPacientes.map((paciente,index) => (
        <tr>
        <p>{paciente.id}</p>
        <p>{paciente.nome}</p>
        <p>{paciente.carteira}</p>
        <p>{paciente.endereco}</p>
        <p>{paciente.data}</p>
        </tr>
      ))}
    </div>
    
    
  )
}