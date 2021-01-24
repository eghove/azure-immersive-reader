import React from "react";
// page content import
import homePageContent from "./homePageContent";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const HomePage = () => {
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
        <Col>
          <Card>
            <Card.Body>
              <p>{homePageContent.introText1}</p>
              <p>{homePageContent.introText2}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default HomePage;
