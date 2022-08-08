import axios from 'axios';

// ACTION TYPES
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';

// ACTION CREATORS
export const _setCart = (cart) => ({
  type: SET_CART,
  cart,
});

export const _addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

// THUNKS
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { data } = await axios.get('/api/cart', {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setCart(data));
      } else {
        const cart = JSON.parse(window.localStorage.getItem('cart'));
        await dispatch(_setCart(cart));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCart = (item, userId, quantity) => {
  return async (dispatch) => {
    try {
      // const token = window.localStorage.getItem('token');

      if (!userId) {
        let cart = JSON.parse(window.localStorage.getItem('cart'));

        if (!cart) {
          // let cart = {
          //   product = []
          // };
          window.localStorage.getItem('cart', JSON.stringify(cart));
        }

        // let currentCart = JSON.parse(window.localStorage.getItem('cart'))
        // const cartItem = currentCart.product.findIndex((element) => 
        //   element.id === product.id)

        //   let itemQuantity = product
        
      } else {
        const { data } = await axios.post(`/api/users/${userId}/addToCart`, {
          id: product.id,
          quantity,
        })
        dispatch(_addToCart(data));
      }
      
    } catch (err) {
      console.log(err);
    }
  }
}

// REDUCER
const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_TO_CART:
      return action.item;
    default:
      return state;
  }
}
