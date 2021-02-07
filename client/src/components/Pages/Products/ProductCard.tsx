// react-bootstrap imports
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// shared component import
import ImmersiveReader from "../Shared/ImmersiveReader";

export interface ProductCardProps {
  accessToken: string;
  subdomain: string;
  product: {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    altText: string;
  };
  azReaderHtml: string;
}
// renders the individual product cards.
// note, currently only set up to handle three cards in array.
export const ProductCard = (props: ProductCardProps) => {
  return (
    <Col md={4} sm={4}>
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            style={{ maxHeight: "30rem", maxWidth: "30rem" }}
            src={process.env.PUBLIC_URL + props.product.imgSrc}
            alt={props.product.altText}
          />
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <ImmersiveReader
            title={"Products"}
            text={props.azReaderHtml}
            accessToken={props.accessToken}
            subdomain={props.subdomain}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};
