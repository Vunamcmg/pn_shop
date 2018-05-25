import * as React from "react";

import { connect } from "react-redux";

import AddCart from "../components/addCart";
import Products from "../components/products";

class App extends React.Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired
  // };
  constructor(props: any) {
    super(props);
    this.state = this.props.shopStore;
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onRemoveProduct = this.onRemoveProduct.bind(this);
    this.onCheckOutProduct = this.onCheckOutProduct.bind(this);
  }
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  async onAddProduct(params: {
    name: string;
    price: string;
    describe: string;
    image: string;
  }) {
    const { name, price, describe, image } = params;
    this.props.dispatch({
      type: "ADD",
      payload: {
        name,
        price,
        describe,
        image
      }
    });
    this.forceUpdate();
  }
  async onRemoveProduct(params: { id: string }) {
    const { id } = params;
    this.props.dispatch({
      type: "DELETE",
      payload: {
        id
      }
    });
    this.forceUpdate();
  }
  async onCheckOutProduct(params: {
    name: string;
    price: string;
    describe: string;
    image: string;
    id: string;
  }) {
    const { name, price, describe, image } = params;
    this.props.dispatch({
      type: "ADD_CART_ITEM",
      payload: {
        name,
        price,
        describe,
        image
      }
    });
    this.forceUpdate();
  }

  render() {
    console.log("PROPS: ", this.props);
    return (
      <div>
        <h1 className="text-center"> PN STORE </h1>
        <hr />
        <div>
          <AddCart onAddProduct={this.onAddProduct} /> <hr />
          <Products
            {...this.props.shopStore}
            onRemoveProduct={this.onRemoveProduct}
            onCheckOutProduct={this.onCheckOutProduct}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(App);
