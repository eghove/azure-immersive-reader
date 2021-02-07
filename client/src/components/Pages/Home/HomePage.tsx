import React from "react";
import ImmersiveReader from "../Shared/ImmersiveReader";
// page content import
import { htmlHelper, homePageContent } from "./homePageContent";
// react-bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

export interface HomePageProps {
  accessToken: string;
  subdomain: string;
}

const HomePage = (props: HomePageProps) => {
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
              ></ImmersiveReader>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default HomePage;
