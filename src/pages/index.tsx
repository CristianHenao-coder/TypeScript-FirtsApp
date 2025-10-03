// index.tsx
import React, { useEffect } from "react";
// import Login from "@/components/Login";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { getProperties } from "@/services/properties";
import { useState } from 'react';

export default function Home() {
  const [dataProperties, setDataProperties] = useState([]);
  
  const handlerClick = async ()=> {
    const response = await getProperties();
    console.log (response);
    setDataProperties(response)
  }
  
  console.log(dataProperties)
  
  useEffect(()=>{
    const fechData = async()=> {
      const response =await getProperties()
      setDataProperties(response);
      console.log("se ejecuto soy el crack UseEffect")
    }
    fechData()
  },[])
  
  return (
    <div className="main">
      <div><Login/></div>
      <ToastContainer aria-label={undefined} />
      <button onClick={handlerClick}> llama la api </button>
    </div>
  );
}

  //-------------------------------------------------

  // Imprimir ultimo dato de la lista
  
  // const array2= ['hola','h','o','l','a']

  // const returnlast= <T,> (array: T[]): T => {

  //   return array[array.length -1]

  // }
  // const result= returnlast<string>(array2)
  // console.log (result)

  // //--------------------------------------------------



  // const returnreverse = <T,>(array: T[]): T[] => {
  //   return array.reverse();
  // };

  // const resultado = returnreverse<string>(array2);
  // console.log(resultado);
   
