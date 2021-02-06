import React from "react";
// page content imports
import {
  productsPageContent,
  products,
  azReaderData,
} from "./productsPageContent";
// sub-component imports
import { ProductCard } from "./ProductCard";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

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
        {products.map((product, index) => {
          return (
            <ProductCard
              product={product}
              accessToken={props.accessToken}
              subdomain={props.subdomain}
              azReaderHtml={azReaderData[index].html}
            />
          );
        })}
      </Row>
    </React.Fragment>
  );
};
export default ProductsPage;
