import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./Shape.svg";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import BtnNext from "../BtnNext";

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
  text-align: left;
  font-family: "CircularBold", san-serif;
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
            <Card />
            <Card2 />
            <Card3 />
            <Card4 />
            <BtnNext />
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
