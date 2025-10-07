import { Card } from "@/components/card/card";
import { useState } from "react";


// import { CgAirplane } from "react-icons/cg";

const aves = [
  {
    color: "green",
    title: "El condor",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSergtUzQGvnSQo7sLRRqvuKBG9Mw5Egen1FA&s",
    description: "El condor herido",
  },
  {
    color: "white",
    title: "un pajarito",
    imageUrl: "https://humanidades.com/wp-content/uploads/2017/03/pajaro-azul-e1563758291533.jpg",
    description: "El pajarito",
  },
  {
    color: "green",
    title: "guacamaya",
    imageUrl: "https://content.nationalgeographic.com.es/medio/2022/12/12/aves-1_0931d689_221212154441_1280x720.jpg",
    description: "guacamaya herida",
  },
  {
    color: "white",
    title: "El condor",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSergtUzQGvnSQo7sLRRqvuKBG9Mw5Egen1FA&s",
    description: "El condor herido",
  },
];

export default function Dashboard() {
  const [inputName, setInputName] = useState('');
  
  return (
    <div>
      <div className="header">
        {/* <h1 className="heading">Bienvenido al Dashboard <CgAirplane /></h1> */}
      </div>
      <div>
        <h2>Bienvenido a tu dashboard</h2>
        <label> Nombre</label>
        <input onChange={(e)=> {
          setInputName(e.target.value)
        }}/>
      </div>
      <div className="flex gap"></div>
      <div className="flex gap">
        {aves.map((ave, index) => (
          <div key={index}>
            <Card
              title={ave.title}
              color={ave.color}
              imageUrl={ave.imageUrl}
              description={ave.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}