// index.tsx

// import Login from "@/components/Login";
import { ToastContainer } from "react-toastify";
import Login from "@/components/Login";

export default function Home() {

  return (
    <div className="main">
      <div><Login/></div>
      <ToastContainer aria-label={undefined} />
     
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
   
