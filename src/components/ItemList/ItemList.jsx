import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ listadoProductos }) => {

    console.log('listadoProductos', listadoProductos)
    
    return (
       
        <div className='container-fluid row gap-15 '>
            <div className="row justify-content-evely hMax">
                {listadoProductos.map((unProducto) => <Item id={unProducto.id} name={unProducto.name} image={unProducto.img} price={unProducto.price} />)}
            </div>
        </div>

    )
}
