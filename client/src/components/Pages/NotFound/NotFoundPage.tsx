import React from "react";
import { useLocation } from "react-router-dom";
import ImmersiveReader from "../Shared/ImmersiveReader";
import PagesProps from "../Shared/IPagesProps";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

/**
 * Changes the HTML supplied to the Immersive Reader based on the pathname.
 * @params pathname
 */
const notFoundPageHtmlBuilder = (pathname: string) => {
  return `<p>
  The page you requested using ${pathname} was not found.
  Please select one of the options in the navigation bar.
</p>`;
};

const NotFoundPage = (props: PagesProps) => {
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
              <ImmersiveReader
                title={"Page Not Found"}
                text={notFoundPageHtmlBuilder(location.pathname)}
                accessToken={props.accessToken}
                subdomain={props.subdomain}
                azCredError={props.azCredError}
              ></ImmersiveReader>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default NotFoundPage;
