import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ name, image, price, id }) => {

    return (
        <div className="col">
            <div className="card wd-18 col-6">
                <img src={image} alt={name} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}$</p>
                    <Link to={`/detail/${name}`}>
                    <button className="btn btn-primary">Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Item