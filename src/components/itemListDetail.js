import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListadoProdutos } from "../data/dates";
import { db } from "../utils/Firebase";

const ItemListDetail = () => {
  const [item, setItem] = useState({})
  const { id } = useParams(); 
 {/* const getProduct = async(id)=>{
    const docRef = doc(db,"datos", id)
    const docSnap = await getDoc(docRef)

      setItem(docSnap.data())
      
    
    } */}

async function getOne(id) {
      try {
      const docRef = doc (db, "datos", id);
      const docResult = await getDoc(docRef);
 
      if (docResult.exists()){
      return { 
      
        id: docResult.id, ...docResult.data()};
      }
      else{
        throw new Error("El producto no se encontró en la base de datos");
      }
    }
    catch(errorMsg) {
      console.error(errorMsg)
    }
    }
  {/*const getOne = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ListadoProdutos.length > 0 ?
          resolve(ListadoProdutos.find((prod)=> prod.name === id))
          :
          reject("No hay datos")
      }, 500);
    }
    )
  }*/}

  useEffect(() => {
    
    getOne()
      .then(res => setItem(res))
  .catch(err => console.log(err))
  })





  return (
    <div className="descriptionProduct">
      <div className="card styleCardDescription animate__bounceIn">

      <h2>{item.name}</h2>
      <strong>Descripcion:</strong>
      <p>{item.description}</p>
      <p className="font-weight">Precio: $ {item.price}</p>
      </div>
    </div>
  );
};

export default ItemListDetail;