import React from 'react';
import styles from './AddToCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class AddToCart extends React.Component {

  state = {
    shoppingCartQtn: 1,
  }


  handleDecrease = (e) => {
    e.preventDefault();
    this.setState({
      shoppingCartQtn: this.state.shoppingCartQtn - 1,
    });
  }

  handleIncrease = (e) => {
    e.preventDefault();
    this.setState({
      shoppingCartQtn: this.state.shoppingCartQtn + 1,
    });
    //this.props.addQtyInCart()
  }

  handleAddToCart = (e, product) => {
    e.preventDefault();
    this.props.addToCart(product, this.state.shoppingCartQtn);
    this.props.history.push('/cart');

  }

  componentDidMount() {
    const { value } = this.props;
    value && this.setState({
      shoppingCartQtn: value,
    });
  }

  render() {
    const { countInStock } = this.props.product;
    const { counter, btn } = this.props;
    return (
      <div className='container' >
        <div className='row'>
          <div className={styles.shoppingQty + counter.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>
            <button disabled={this.state.shoppingCartQtn === 1 ? true : false} onClick={this.handleDecrease}>-</button>
            <span> {this.state.shoppingCartQtn}</span>
            <button disabled={this.state.shoppingCartQtn >= countInStock} onClick={this.handleIncrease}>+</button>
          </div>
          <div className={btn.split(' ').map((name) => ' ' + (styles[name] || name)).join('')}>
            <Button className={styles.options} variant='small' click={(e) => this.handleAddToCart(e, this.props.product)}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div >
      </div >
    );
  }
}

AddToCart.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  history: PropTypes.object,
  counter: PropTypes.node,
  btn: PropTypes.node,
  value: PropTypes.node,
};

export default withRouter(AddToCart);
