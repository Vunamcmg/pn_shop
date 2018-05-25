import * as React from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddCart extends React.Component {
  constructor(props: any) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }
  async addProduct(event: any) {
    event.preventDefault();
    this.props.onAddProduct({
      name: this.refs.name.value,
      price: this.refs.price.value,
      describe: this.refs.describe.value,
      image: this.refs.image.value
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
        <h2> Thêm sản phẩm </h2>
        <form onSubmit={this.addProduct}>
          <div className="form-group row">
            <div className="col-md-2 col-lg-2 col-xs-2">
              <label>Name:</label>
            </div>
            <div className="col-md-10 col-lg-10 col-xs-10">
              <input
                type="text"
                className="form-control"
                placeholder="Product name"
                ref="name"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-2 col-lg-2 col-xs-2">
              <label>Price:</label>
            </div>
            <div className="col-md-10 col-lg-10 col-xs-10">
              <input
                type="text"
                className="form-control"
                placeholder="Product price"
                ref="price"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-2 col-lg-2 col-xs-2">
              <label>Description:</label>
            </div>
            <div className="col-md-10 col-lg-10 col-xs-10">
              <input
                type="text"
                className="form-control"
                placeholder="Product description"
                ref="describe"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-2 col-lg-2 col-xs-2">
              <label>Image:</label>
            </div>
            <div className="col-md-10 col-lg-10 col-xs-10">
              <input
                type="text"
                className="form-control"
                placeholder="Product Image Link"
                ref="image"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm sản phẩm
          </button>
        </form>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(AddCart);
//export default AddCart;
