import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState, setLoading } from 'react';
import { useParams } from 'react-router-dom';
//import Db  from '../../../db/firebase-confing';
import { ListadoProdutos } from '../../data/dates'
import { db } from '../../utils/Firebase';
import Description from '../filter';
import { ItemList } from '../ItemList/ItemList';


const ItemListContainer = ({ greetings }) => {
  //es de firebase
  const productsCollectionRef = collection(db, "datos");
 
  



//no es firebase
  const [productos, setProductos] = useState([])
  const {id}= useParams()
  
  {/*const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ListadoProdutos.length > 0 ?
          resolve(ListadoProdutos)
          :
          reject("No hay datos")
      }, 500);
    }
    )
  }*/}
  const getProducts= async () => {
    const data = await getDocs(productsCollectionRef)
    setProductos(data.docs.map(doc =>({...doc.data(), id: doc.id})))
    
  }
  useEffect(() => {
    getProducts()
    

    {/*getProductos()
      .then(res => {
        if(id){
          setProductos(res.filter((item)=> item.category === id))
        }else{
          setProductos(res)
        }
      })
      .catch(err => console.log(err))*/}
  },[],{/*, [id] */})


  return (
    <main>
      <div>
        <h1 className="colorWhite animate__backInDown">{greetings}</h1>
      </div>
        
       <ItemList listadoProductos={productos}/>
      
    </main>
  );
};

export default ItemListContainer;