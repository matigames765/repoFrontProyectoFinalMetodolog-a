import axios from "axios";
import { ITalles } from "../../types/Producto/ITalles";

//obtener talles
export const getAllTalles = async (): Promise<ITalles[] | undefined> => {
  const token = localStorage.getItem("authentication");
  try {
    const response = await axios.get<ITalles[]>(
      "http://localhost:9000/talles",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error al traer los talles en getAllTalles http: " + error);
  }
};
