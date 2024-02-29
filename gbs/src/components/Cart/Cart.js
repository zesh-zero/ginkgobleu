import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import { ProductConsumer } from '../../context.js';
import CartList from './CartList.js';
import CartTotals from './CartTotals.js'

export default class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='your' title='cart' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer> 
      </div>
    )
  }
}
