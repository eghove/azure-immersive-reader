import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
import PagesProps from "../Shared/IPagesProps";
// page content import
import { htmlHelper, homePageContent } from "./homePageContent";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const HomePage = (props: PagesProps) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Jumbotron>
            <h1>{homePageContent.jumboText}</h1>
            <p>{homePageContent.sloganText}</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <p>{homePageContent.introText1}</p>
              <p>{homePageContent.introText2}</p>
              <ImmersiveReader
                title={"Hove's Stoves"}
                text={htmlHelper}
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
export default HomePage;
