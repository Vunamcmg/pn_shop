import * as React from "react";
import { connect } from "react-redux";

class Products extends React.Component {
  constructor(props: any) {
    super(props);
    this.removeProduct = this.removeProduct.bind(this);
    this.checkOutProduct = this.checkOutProduct.bind(this);
  }
  componentWillReceiveProps(nextProps: any) {}
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true;
  }
  products = this.props.products.map((product: any) => {
    return (
      <tr>
        <td> {product.name} </td>
        <td>
          {" "}
          <img
            src={product.image}
            className="producImage"
            height="100px"
            width="100px"
          />{" "}
        </td>
        <td> {product.price} </td>
        <td> {product.describe} </td>
        <td>
          <button
            className="btn btn-primary"
            background="red"
            onClick={() => this.removeProduct({ id: product.id })}
          >
            {" "}
            Xoá &#160;
            <i
              className="fa fa-remove"
              onClick={() => this.removeProduct({ id: product.id })}
            />{" "}
          </button>
        </td>
      </tr>
    );
  });

  async removeProduct(params: { id: string }) {
    const { id } = params;
    this.props.onRemoveProduct({ id });
  }
  async checkOutProduct(params: { product: any }) {
    const { product } = params;
    alert(JSON.stringify(product));
    this.props.onCheckOutProduct(product);
  }
  render() {
    return (
      <div className="container">
        <h2> Danh sách sản phẩm </h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th> Tên </th>
              <th> Hình ảnh </th>
              <th> Giá </th>
              <th> Chú thích </th>
              <th> Thao tác </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product: any) => {
              return (
                <tr key={product.id}>
                  <td> {product.name} </td>
                  <td>
                    {" "}
                    <img
                      src={product.image}
                      className="producImage"
                      height="100px"
                      width="100px"
                    />{" "}
                  </td>
                  <td> {product.price} </td>
                  <td> {product.describe} </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      background="red"
                      onClick={() => this.checkOutProduct({ product: product })}
                    >
                      {" "}
                      Thêm vào giỏ &#160;
                      <i className="fa fa-shop" />{" "}
                    </button>
                    <button
                      className="btn btn-primary"
                      background="red"
                      onClick={() => this.removeProduct({ id: product.id })}
                    >
                      {" "}
                      Xoá &#160;
                      <i className="fa fa-remove" />{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};
export default Products;
//export default connect(mapStateToProps)(Products);
