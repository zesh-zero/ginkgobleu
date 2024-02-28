import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: [],
    cart: [],
    modalOpen: false,
    modalProduct: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts();
    this.setCart();
  }
  
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return {products: tempProducts}
    })
  }

  setCart = () => {
    const cart = localStorage.getItem('gb-cart-items');
    if (!cart) { return {cart: []}}

    const tempCartItems = JSON.parse(
      localStorage.getItem('gb-cart-items')
    );

    const cartItems = tempCartItems.filter(item => item.count > 0);
    
    this.setState(() => {
      return {cart: cartItems}
    })
  }

  getItem = (id) => {
    return this.state.products.find(item => item.id === id);
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {detailProduct: product}
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    const price = product.price;
    product.inCart = true;
    product.count = 1;
    product.total = price;

    this.setState(() => {
      this.saveToLocalStorage(tempProducts);
      return {products: tempProducts, cart:[...this.state.cart, product]};
    },
    () => {
      this.addTotals();
    })
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct: product, modalOpen: true};
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {modalOpen: false};
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count++;
    product.total = product.count * product.price;

    this.setState(() => {
      return {
        cart:[...tempCart]
      }
    },() => {
      this.addTotals();
    })
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count--;

    if(product.count === 0) {
      this.removeItem(id);
      return;
    } 
   
    product.total = product.count * product.price;
    
    this.setState(() => {
      return {
        cart:[...tempCart]
      }
    },() => {
      this.addTotals();
    })
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart:[...tempCart],
        products:[...tempProducts]
      }
    },() => {
      this.addTotals();
    })
  }

  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    },() => {
      this.setProducts();
      this.addTotals();
      this.saveToLocalStorage([]);
  })
  }

  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));
    const tempTax = subtotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  saveToLocalStorage = (cart) => {
    localStorage.setItem('gb-cart-items', JSON.stringify(cart))
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };