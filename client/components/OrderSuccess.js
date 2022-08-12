import React from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../store/cart';
class OrderSuccess extends React.Component {
  componentDidMount() {
    this.props.emptyCart(this.props.cart);
  }

  render() {
    return (
      <div className="div-container">
        <h3 style={{ textAlign: 'center', marginTop: '150px' }}>
          Thank you for your order! ✺◟(＾∇＾)◞✺
        </h3>
        <div className="confirmation-div">
          <div>
            <p style={{ textAlign: 'center' }}>
              YOUR ORDER WAS PLACED SUCCESSFULLY 🥳
            </p>
            <p style={{ textAlign: 'center' }}>
              Check your email for your order confirmation
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>
          Your Order Number: {Math.floor(Math.random() * Math.floor(999))}-
          {Math.floor(Math.random() * Math.floor(999))}-
          {Math.floor(Math.random() * Math.floor(9999))}
        </p>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: (cart) => dispatch(emptyCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);
