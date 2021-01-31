import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
// page content imports
import { productsPageContent, products } from "./productsPageContent";
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
            <h1>{productsPageContent.jumboText}</h1>
            <p>{productsPageContent.sloganText}</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + products[0].imgSrc}
                alt={products[0].altText}
              />
              <Card.Title>{products[0].title}</Card.Title>
              <Card.Text>{products[0].description}</Card.Text>
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
