import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import productsReducer from './allProducts';
import ordersReducer from './allOrders';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';
import singleUserReducer from './singleUser'
import usersReducer from './allUsers';


const reducer = combineReducers({
  auth,
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
  user: singleUserReducer,
  singleProduct: singleProductReducer,
  allUsers: usersReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
