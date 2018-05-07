import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withFirestore,
  firestoreConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Button
} from "reactstrap";

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
      <ListGroupItem>
        <ListGroupItemHeading>{this.props.product.name}</ListGroupItemHeading>
        <Button color="danger" onClick={this.onDelete}>
          Delete
        </Button>
      </ListGroupItem>
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
    <ListGroup>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ListGroup>
  );
};

const ProductsPage = ({ products, firestore }) => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Products</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <ProductsList products={products} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddProductForm onSubmit={data => firestore.add("products", data)} />
        </Col>
      </Row>
    </Container>
  );
};

export default compose(
  withFirestore,
  firestoreConnect(["products"]),
  connect((state, props) => ({
    products: state.firestore.ordered.products
  }))
)(ProductsPage);
