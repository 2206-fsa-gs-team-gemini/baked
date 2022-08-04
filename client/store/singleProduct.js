import axios from "axios";

// Action type
// const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";


const SET_PRODUCT = 'SET_PRODUCT'
const CREATE_PRODUCT = 'CREATE_PRODUCT'

// Action creator
// export const _getSingleProduct = (product) => ({
//   type: GET_SINGLE_PRODUCT,
//   product,
// });


export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product
  }
}

const _createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

// Thunk creator
// export const getSingleProduct = (product) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/products/${product.id}`);
//     dispatch(_getSingleProduct(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`)
      dispatch(setProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const createProduct = (product, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/products', product);
    dispatch(_createProduct(created));
    history.push('/products')
  }
}

// Reducer
const initialState = {};
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    case CREATE_PRODUCT:
      return { ...state, prodcut: action.product };
    default:
      return state;
  }
}

// increase/decrease
