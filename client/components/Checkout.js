// import React from 'react';
// import { Link } from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout'

// class Checkout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       phoneNumber: '',
//       email: '',
//       street: '',
//       apartment: '',
//       city: '',
//       state: '',
//       zip: '',
//       nameOnCard: '',
//       cardNumber: '',
//       secureCode: '',
//       expiration: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleToken = this.handleToken.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ ...this.state, [event.target.name]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   handleToken(token, addresses) {
//     console.log('token: \n', token, '\n', 'addresses: \n', addresses)
//   }

//   render() {
//     const { handleSubmit, handleChange } = this;
//     const {
//       name,
//       phoneNumber,
//       email,
//       street,
//       apartment,
//       city,
//       state,
//       zip,
//       nameOnCard,
//       cardNumber,
//       secureCode,
//       expiration,
//     } = this.state;
//     return (
//       <div>
//         <div>

//         <h2 style={{ textAlign: 'center' }}>Checkout</h2>
//         </div>
//         <div>
//           <h3 style={{ marginLeft: '2rem', fontWeight: 'lighter' }}>
//             Shipping Information
//           </h3>
//           <form className="billing-details-container" onSubmit={handleSubmit}>
//             <input
//               className="shipping-info-field"
//               placeholder="Full name"
//               type="name"
//               name="name"
//               onChange={handleChange}
//               value={name}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Full name is a required field',
//                   alert('Go back and add a name for your order')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="Phone number"
//               type="text"
//               name="phoneNumber"
//               onChange={handleChange}
//               value={phoneNumber}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Phone number is a required field',
//                   alert('Go back and add a phone number for your order')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="Email"
//               type="email"
//               name="email"
//               onChange={handleChange}
//               value={email}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Email is a required field',
//                   alert('Go back and add a valid email')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               type="text"
//               name="street"
//               onChange={handleChange}
//               placeholder="Street address or P.O. Box"
//               value={street}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Address is a required field',
//                   alert('How else will we know where to ship your order to?')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               type="text"
//               name="apartment"
//               onChange={handleChange}
//               placeholder="Apartment, suite, unit, building, floor, etc."
//               value={apartment}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="City"
//               type="text"
//               name="city"
//               onChange={handleChange}
//               value={city}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'City is a required field',
//                   alert('We need a city to know where to ship your order to')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="State"
//               type="text"
//               name="state"
//               onChange={handleChange}
//               value={state}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'State is a required field',
//                   alert('We need a state to know where to ship your order to')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="Zip code"
//               type="text"
//               name="zip"
//               onChange={handleChange}
//               value={zip}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'ZIP Code is a required field',
//                   alert(
//                     'We need a zip code to know where to ship your order to'
//                   )
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />
//           </form>
//         </div>

//         <div style={{ marginTop: '4rem' }}>
//           <h3 style={{ marginLeft: '2rem', fontWeight: 'lighter' }}>
//             Billing Information
//           </h3>
//           <form className="billing-details-container" onSubmit={handleSubmit}>
//             <input
//               className="shipping-info-field"
//               placeholder="Name on card"
//               type="text"
//               name="nameOnCard"
//               onChange={handleChange}
//               value={nameOnCard}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'A name on card is a required field',
//                   alert('We need a name from the card so we know who to charge')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="Card number"
//               type="text"
//               name="cardNumber"
//               onChange={handleChange}
//               value={cardNumber}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'is a required field',
//                   alert('Go back and add a ')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />

//             <input
//               className="shipping-info-field"
//               placeholder="Expiration date"
//               type="text"
//               name="expiration"
//               onChange={handleChange}
//               value={expiration}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Expiration Date is a required field',
//                   alert(
//                     'We need to make sure we can charge you by seeing if your card is expired or not'
//                   )
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />
//             <br />

//             <input
//               className="shipping-info-field"
//               placeholder="Security code"
//               type="text"
//               name="secureCode"
//               onChange={handleChange}
//               value={secureCode}
//               required
//               onInvalid={(e) =>
//                 e.target.setCustomValidity(
//                   'Secure Code is a required field',
//                   alert('It is the last three digits on the back of your card')
//                 )
//               }
//               onInput={(e) => e.target.setCustomValidity('')}
//             />
//           </form>
//         </div>
//         <StripeCheckout 
//           stripeKey="pk_test_51LVr41ImfnPLPO1q7x6T3uQ5csiBeeJmedOxPd6mYoCZtZxwH4M27PjC3qxwr5jphpws18lrvoQtklkoLK4gvnvm00wJjUGWxY"
//           token={handleToken}
//           />
//         {/* <button className="complete-checkout-btn" type="button">
//           <Link to="/orderSuccess">Place Order</Link>
//         </button> */}
//       </div>
//     );
//   }
// }

// export default Checkout;


// With Stripe
import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { emptyCart } from '../store/cart';

class Checkout extends React.Component {
  constructor() {
    super();
    this.handleToken = this.handleToken.bind(this);
    // this.handleSuccess = this.handleSuccess(this);
  }

  componentDidMount() {
    this.props.emptyCart(this.props.cart);
  }

  async handleToken(token) {
    const response = await axios.post('/api/checkout', {
      token,
      product: {
        price: 3.99,
      }
    });
    const { status } = response.data;
    if (status === 'success') {
      alert('Success! Check email for details', { type: 'success' })
    } else {
      alert('Uh oh! Something went wrong!', { type: 'error'})
    }
  }

  render() {
    const { handleToken, handleSuccess } = this;
    return (
      <div>
        <StripeCheckout 
          stripeKey="pk_test_51LVr41ImfnPLPO1q7x6T3uQ5csiBeeJmedOxPd6mYoCZtZxwH4M27PjC3qxwr5jphpws18lrvoQtklkoLK4gvnvm00wJjUGWxY"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={3.99}
          name="Payment Information"
          />
        {/* <button className="complete-checkout-btn" type="button">
          <Link to="/orderSuccess">Place Order</Link>
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  emptyCart: (cart) => dispatch(emptyCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
