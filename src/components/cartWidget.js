import React from 'react';

class CartWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberCart:0
        }
    }
    render() {
        return (
            <div className="cart-widget">
        <i class="fa-sharp fa-solid fa-cart-shopping"></i> <p>{this.state.numberCart}</p>
        </div>
            
        )
        
    }
}

export default CartWidget;