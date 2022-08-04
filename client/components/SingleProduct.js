import React from "react";
import { connect } from 'react-redux';
import { fetchProduct } from "../store/singleProduct";
import { updateProduct } from "../store/allProducts"

class SingleProduct extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.addToCart = this.addToCart.bind(this)
  // }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  // addToCart() {}

  render() {
    const { name, imageURL, price, description, category, quantity } = this.props.product
    console.log('PROPS',this.props)
    return (
      <div>
        <p>{name}</p>
        <img className="single-product-image" src={imageURL} />
        <p>{price}</p>
        <p>{description}</p>
        {/* <p>{category}</p> */}
        <label htmlFor="productQuantity">Quantity</label>
          <select>
            {/* <option value="0">0</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        <br />
        <button>Add To Cart</button>
        {/* <button onClick={addToCart}>Add To Cart</button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);