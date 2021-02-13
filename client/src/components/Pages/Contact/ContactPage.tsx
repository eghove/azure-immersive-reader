import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
import PagesProps from "../Shared/IPagesProps";
// page content imports
import { contactPageContent, htmlHelper } from "./contactPageContent";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const ContactPage = (props: PagesProps) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Jumbotron>
            <h1>{contactPageContent.jumboText}</h1>
            <p>{contactPageContent.sologanText}</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <p>{contactPageContent.phoneText}</p>
              <p>{contactPageContent.emailText}</p>
              <ImmersiveReader
                title={"Hove's Stoves"}
                text={htmlHelper}
                accessToken={props.accessToken}
                subdomain={props.subdomain}
              ></ImmersiveReader>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ContactPage;
