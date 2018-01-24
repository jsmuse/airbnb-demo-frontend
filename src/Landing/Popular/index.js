import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./Shape.svg";
import Card from "./Card";
import BtnNext from "../BtnNext";
import HorizontalScroll from "../HorizontalScroll";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import image2 from "./Rectangle2.png";
import image22x from "./Rectangle2@2x.png";
import image3 from "./Rectangle3.png";
import image32x from "./Rectangle3@2x.png";
import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";
import Title from "../Title";

const Container = styled.div`
  position: relative;
`;

const BtnAll = styled.button`
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

export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs={10}>
            <Title>Popular reservations around the world</Title>
          </Col>
          <Col xs>
            <BtnAll>
              See all <Arrow src={arrow} alt="Arrow" />
            </BtnAll>
          </Col>
        </Row>
        <Container>
          <Row>
            <HorizontalScroll>
              <Card
                picSrc={image}
                picSrc2x={image2x}
                price="60"
                title="Chumley’s"
                place="Speakeasy"
              />
              <Card
                picSrc={image2}
                picSrc2x={image22x}
                price="50"
                title="Hanjan"
                place="Korean gastropub"
              />
              <Card
                picSrc={image3}
                picSrc2x={image32x}
                price="55"
                title="Prime Meats"
                place="German american"
              />
              <Card
                picSrc={image4}
                picSrc2x={image42x}
                price="70"
                title="Seaprice"
                place="Fine seafood"
              />
              <BtnNext />
            </HorizontalScroll>
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
