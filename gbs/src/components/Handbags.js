import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class Handbags extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='handbags' />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    if (product.categoryId === 1) {
                      return <Product key={product.id} product={product} />;
                    }
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
