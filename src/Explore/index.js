import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Homes from "./Homes";
import Experiences from "./Experiences";
import Restaurants from "./Restaurants";
import HorizontalScroll from "../HorizontalScroll";

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
  font-family: "CircularBold", san-serif;
`;

export default () => {
  return (
    <Grid>
      <Row start="xs">
        <Col xs={12}>
          <Title>Explore Airbnb</Title>
        </Col>
      </Row>
      <HorizontalScroll>
        <Homes />
        <Experiences />
        <Restaurants />
      </HorizontalScroll>
    </Grid>
  );
};
