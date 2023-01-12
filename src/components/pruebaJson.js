import React, { Component } from 'react';
import {Route,Routes,Outlet, Link} from 'react-router-dom';
import ListadoProdutos from '../data/dates.jsx'

class PruebaJson extends Component {
    render() {
        return (
            <div className='container-fluid row gap-15'>
              
              {ListadoProdutos.map(date=>(
                <div className='card wd-18 col-6'>
                    <img src={date.src} className="card-img-top"/>
                    <h2 className='card-title fs-4'>{date.nombre}</h2>
                    <p>{date.description}</p>
                    <p>Precio:{date.precio}$</p>
                    <Link to={`${date.nombre}`}>
                    <button class="btn btn-primary" type="submit">Ver</button>
                    </Link>
                </div>
              ))}  
            </div>
        );
    }
}


export default PruebaJson;
