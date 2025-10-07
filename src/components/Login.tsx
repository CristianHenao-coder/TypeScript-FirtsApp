// /src/components/Login.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { Userio, notificacion } from "../dto/helpers/utils";
import { MiButton } from './button/button';
import handler from '../pages/api/hello';
import { getProperties } from "@/services/properties";
import React, { useEffect } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const router = useRouter();
  
  const verificar = () => {
    const usuarioEncontrado = Userio.find((u) => u.name === usuario);
    const esValido = usuarioEncontrado && usuarioEncontrado.password === clave;
    
    if (esValido) {
      notificacion("Bienvenido " + usuario, "success")
      router.push("/dashboard");
    } else {
      notificacion("Usuario o contraseña incorrectos", "error");
      setUsuario("");
      setClave("");
    }
  };
  
  const [loader, setloader] = useState(false);
  
  const handleLoaderClick = () =>{
    setloader(true);
    setTimeout (()=>{
      setloader(false);
    }, 3000);
  };

  //Boton api handleClick

    const [dataProperties, setDataProperties] = useState([]);

     useEffect(()=>{
    const fechData = async()=> {
      const response =await getProperties()
      setDataProperties(response);
      console.log("se ejecuto soy el crack UseEffect")
    }
    fechData()
  },[])

    const handleApiClick = async ()=> {
      const response = await getProperties();
      console.log (response);
      setDataProperties(response)
    }

  
  console.log(dataProperties)
  


  return (
    <div className="box">
      <h1 className="title">Login</h1>
      <p>Escribe tu Usuario</p>
      <label className="label">Usuario</label>
      <input
        className="input"
        type="text"
        value={usuario}
        placeholder="Tu usuario"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <label className="label top">Contraseña</label>
      <input
        className="input"
        type="password"
        value={clave}
        placeholder="Tu contraseña"
        onChange={(e) => setClave(e.target.value)}
      />
      <button className="btn top" onClick={verificar}>
        Ingresar
      </button >

      <p className="btn save">
      <MiButton  text ={"guardar"} icon={"***"} loading={loader} Click={handleLoaderClick}/>
      </p>

       <button  className="btn api" onClick={handleApiClick}> llama la api </button>
    </div>
  );
}