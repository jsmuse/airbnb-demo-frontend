import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Card from "./Card";
import HorizontalScroll from "../HorizontalScroll";
import Title from "../Title";
import pic from "./Rectangle2.png";
import pic2x from "./Rectangle2@2x.png";
import pic2 from "./Rectangle2-2.png";
import pic2x2 from "./Rectangle2-2@2x.png";
import pic3 from "./Rectangle2-3.png";
import pic2x3 from "./Rectangle2-3@2x.png";

const Container = styled.div`
  margin-top: 128px;
`;

export default () => {
  return (
    <Container>
      <Grid>
        <Row start="xs">
          <Col xs={12}>
            <Title>Explore Airbnb</Title>
          </Col>
        </Row>
        <HorizontalScroll>
          <Card picSrc={pic} pic2xSrc={pic2x}>
            Homes
          </Card>
          <Card picSrc={pic2} pic2xSrc={pic2x2}>
            Experiences
          </Card>
          <Card picSrc={pic3} pic2xSrc={pic2x3}>
            Restaurants
          </Card>
        </HorizontalScroll>
      </Grid>
    </Container>
  );
};
