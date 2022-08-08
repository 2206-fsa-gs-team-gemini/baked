import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import Shop from './components/Shop';
import Cart from './components/Cart';
import CreateUser from './components/CreateUser';
import SingleProduct from './components/SingleProduct';
import OrderHistory from './components/OrderHistory';
import UserProfile from './components/UserProfile';
import Admin from './components/Admin';
import Checkout from './components/Checkout';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    // this.props.fetchUsers();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;
    console.log(this.props.getAllUsers);
    console.log(this.props.state)
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/products" component={Shop} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cart/checkout/:cartId" component={Checkout} />
            <Route exact path="/profile" component={UserProfile} />
            <Route path="/users/orders" component={OrderHistory} />

            {isAdmin && <Route exact path='/login/admin' component={Admin} />}
            
            {isAdmin ? (
              <Redirect from='/login' to='/login/admin' />
            ) : (
              <Redirect from='/login' to='/' />
            )}
            
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreateUser} />
            <Route exact path="/products" component={Shop} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin == 'TRUE',
    state: state.allUsers,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    getAllUsers: () => dispatch(fetchUsers()),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
