import React from "react";
import TweetEmbed from "react-tweet-embed";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  return (
    <>
      {/* <h1>Hello world</h1> */}
      <div className="">
        <TweetEmbed id="1484954248094035972" />
      </div>
  <Container>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </>
  );
}
