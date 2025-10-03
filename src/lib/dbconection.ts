
import mongoose from "mongoose";

const dbConnection = async () => {

  try {

    console.log( process.env.MONGODB_URI)
    console.log(process.env.PRUEBA)
    const mongodbAtlas = process.env.MONGODB_URI || ""; 
    await mongoose.connect(mongodbAtlas);

    console.log('DB Online');

  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - Hable con el administrador");
  }
};

export default dbConnection;