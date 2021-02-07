import React from "react";
import { useLocation } from "react-router-dom";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <p>
                The page you requested using {location.pathname} was not found.
                Please select one of the options in the navigation bar.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default NotFoundPage;
