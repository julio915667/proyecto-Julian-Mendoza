import React from 'react'; 
import cartLogo from '../../assets/images/cart.png'; 

const CartWidget = () => { 

  return (<>
      {
      <a style={{ backgroundColor: '#e4c360', border: 'none', marginLeft: 16, marginRight: 24 }}>
        <img src={cartLogo} alt="cart" width={32} height={32} />
        <button style={{ backgroundColor: '#e4c360', border: 'none'}}>{0}</button>        
      </a>
      }
  </>
  );
};

export default CartWidget;
