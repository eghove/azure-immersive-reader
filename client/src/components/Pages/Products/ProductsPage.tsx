import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
// page content imports
import {
  productsPageContent,
  products,
  azReaderData,
} from "./productsPageContent";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

export interface ProductsPageProps {
  accessToken: string;
  subdomain: string;
}
const ProductsPage = (props: ProductsPageProps) => {
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
        <Col md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                style={{ maxHeight: "40rem", maxWidth: "40rem" }}
                src={process.env.PUBLIC_URL + products[0].imgSrc}
                alt={products[0].altText}
              />
              <Card.Title>{products[0].title}</Card.Title>
              <Card.Text>{products[0].description}</Card.Text>
              <ImmersiveReader
                title={"Products"}
                text={azReaderData[0].html}
                accessToken={props.accessToken}
                subdomain={props.subdomain}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                style={{ maxHeight: "40rem", maxWidth: "40rem" }}
                src={process.env.PUBLIC_URL + products[1].imgSrc}
                alt={products[1].altText}
              />
              <Card.Title>{products[1].title}</Card.Title>
              <Card.Text>{products[1].description}</Card.Text>
              <ImmersiveReader
                title={"Products"}
                text={azReaderData[1].html}
                accessToken={props.accessToken}
                subdomain={props.subdomain}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={4}>
          <Card>
            <Card.Body>
              <Card.Img
                variant="top"
                style={{ maxHeight: "40rem", maxWidth: "40rem" }}
                src={process.env.PUBLIC_URL + products[2].imgSrc}
                alt={products[2].altText}
              />
              <Card.Title>{products[2].title}</Card.Title>
              <Card.Text>{products[2].description}</Card.Text>
              <ImmersiveReader
                title={"Products"}
                text={azReaderData[2].html}
                accessToken={props.accessToken}
                subdomain={props.subdomain}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ProductsPage;
