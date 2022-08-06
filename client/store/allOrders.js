import axios from "axios";

// Action Types
const SET_ORDERS = "SET_ORDERS";

// Action Creators
export const _setOrders = (orders) => ({
  type: SET_ORDERS,
  orders,
});

// Thunk
export const fetchOrders = (userId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.get(`/api/users/${userId}/orders`, {
          headers: {
            authorization: token
          }
        });
        dispatch(_setOrders(data));
      } else {
        console.log('go to your own profile!')
      }
    } catch (err) {
      console.error('wtf');
    }
  };
};

// Reducer
const initialState = [];
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
