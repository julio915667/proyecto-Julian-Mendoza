import React from 'react' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'; 
import './App.css'
import {  Link, Route, Routes } from 'react-router-dom';
import ItemListDetail from './components/itemListDetail';
import { ButtonError } from './error404';
import About from './about';


function App() {
  
  return (
    <>
     <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer greetings="Bienvenido"/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemListDetail/>}/>
        <Route path='/category/:id' element={<ItemListDetail/>}/>
        <Route path="/*" element={<ButtonError/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;