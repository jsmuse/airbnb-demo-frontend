import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./Shape.svg";
import Card from "./Card";
import BtnNext from "../BtnNext";
import Title from "../Title";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import image2 from "./Rectangle2.png";
import image22x from "./Rectangle2@2x.png";
import image3 from "./Rectangle3.png";
import image32x from "./Rectangle3@2x.png";
import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";

const BtnAll = styled.a`
  background: none;
  border: none;
  color: #383838;
  line-height: 24px;
  font-size: 0.875rem;
`;

const Arrow = styled.img`
  transform: rotate(-90deg);
  margin-bottom: 2px;
`;

const Container = styled.div`
  position: relative;
`;

export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs>
            <Title>Experiences</Title>
          </Col>
          <Col xs>
            <BtnAll>
              See all <Arrow src={arrow} alt="Arrow" />
            </BtnAll>
          </Col>
        </Row>
        <Container>
          <Row>
            <Card
              picSrc={image}
              picSrc2x={image2x}
              price="29"
              title="Forest therapy"
              reviewsCount="44"
            />
            <Card
              picSrc={image2}
              picSrc2x={image22x}
              price="69"
              title="Whale watching"
              reviewsCount="46"
            />
            <Card
              picSrc={image3}
              picSrc2x={image32x}
              price="69"
              title="Table Mountain Summit, Cable Car Down"
              reviewsCount="44"
            />
            <Card
              picSrc={image4}
              picSrc2x={image42x}
              price="50"
              title="Salsa Night"
              reviewsCount="44"
            />
            <BtnNext />
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
