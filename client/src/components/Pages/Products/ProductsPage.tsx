import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const ProductsPage = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Products</h1>
            <p>Check out our "hottest" vintage stoves!</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Big Red</Card.Title>
              <Card.Text>
                This is a classic red stove, sure to be a coversation starter in
                your home!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Big Red</Card.Title>
              <Card.Text>
                This is a classic red stove, sure to be a coversation starter in
                your home!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Big Red</Card.Title>
              <Card.Text>
                This is a classic red stove, sure to be a coversation starter in
                your home!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ProductsPage;
