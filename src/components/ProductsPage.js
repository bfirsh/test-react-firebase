import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withFirestore,
  firestoreConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import AddProductForm from "./AddProductForm";

class ProductListItem extends React.Component {
  onDelete = () => {
    this.props.firestore.deleteRef({
      collection: "products",
      doc: this.props.product.id
    });
  };

  render() {
    return (
      <li>
        {this.props.product.name}
        <button onClick={this.onDelete}>Delete</button>
      </li>
    );
  }
}

ProductListItem = withFirestore(ProductListItem);

const ProductsList = ({ products }) => {
  if (!isLoaded(products)) {
    return <div>Loading...</div>;
  } else if (isEmpty(products)) {
    return <div>No products</div>;
  }
  return (
    <ul>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

const ProductsPage = ({ products, firestore }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
      <AddProductForm onSubmit={data => firestore.add("products", data)} />
    </div>
  );
};

export default compose(
  withFirestore,
  firestoreConnect(["products"]),
  connect((state, props) => ({
    products: state.firestore.ordered.products
  }))
)(ProductsPage);
