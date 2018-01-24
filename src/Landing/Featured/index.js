import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import image2 from "./Rectangle2.png";
import image22x from "./Rectangle2@2x.png";
import image3 from "./Rectangle3.png";
import image32x from "./Rectangle3@2x.png";
import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";
import image5 from "./Rectangle5.png";
import image52x from "./Rectangle5@2x.png";
import image6 from "./Rectangle6.png";
import image62x from "./Rectangle6@2x.png";
import BtnNext from "../BtnNext";
import HorizontalScroll from "../HorizontalScroll";
import Title from "../Title";
import Card from "./Card";

const Container = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs>
            <Title>Featured</Title>
          </Col>
        </Row>
        <Container>
          <Row>
            <HorizontalScroll>
              <Card picSrc={image} picSrc2x={image2x} place="Paris" />
              <Card picSrc={image2} picSrc2x={image22x} place="Miami" />
              <Card picSrc={image3} picSrc2x={image32x} place="Tokyo" />
              <Card picSrc={image4} picSrc2x={image42x} place="Cape town" />
              <Card picSrc={image5} picSrc2x={image52x} place="Seoul" />
              <Card picSrc={image6} picSrc2x={image62x} place="Los Angeles" />
              <BtnNext />
            </HorizontalScroll>
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
