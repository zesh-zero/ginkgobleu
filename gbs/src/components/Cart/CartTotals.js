import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
  const {cartSubtotal,cartTax,cartTotal,clearCart} = value;

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end'>
            <Link to='/'>
              <button 
                className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>subtotal :</span>
              <strong>$ {Math.round(cartSubtotal).toFixed(2)}</strong>
            </h5>
            <h5>
              <span className='text-title'>tax :</span>
              <strong>$ {Math.round(cartTax).toFixed(2)}</strong>
            </h5>
            <h5>
              <span className='text-title'>total :</span>
              <strong>$ {Math.round(cartTotal).toFixed(2)}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
