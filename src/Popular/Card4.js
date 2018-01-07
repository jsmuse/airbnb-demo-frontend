import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import image from "./Rectangle4.png";
import image2x from "./Rectangle4@2x.png";
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.p`
  margin: 0 0 4px;
  font-family: "CircularBold", san-serif;
  font-size: 1.125rem;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-family: CircularLight, san-serif;
  margin: 2px 0 6px;
`;
const Place = styled.p`
  font-family: "CircularBold", san-serif;
  margin: 12px 0 2px;
  text-transform: uppercase;
  font-size: 0.625rem;
`;

export default () => {
  return (
    <Col xs={6} sm={4} md={3}>
      <Card>
        <Image src={image} srcSet={image2x} alt="image experiense" />
        <Row start="xs" top="xs">
          <Col xs>
            <TextContainer>
              <Place>Fine seafood</Place>
            </TextContainer>
          </Col>
        </Row>
        <Row start="xs" top="xs">
          <Col xs>
            <TextContainer>
              <Name>Seaprice</Name>
            </TextContainer>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs>
            <TextContainer>
              <Price>About $70 per person</Price>
            </TextContainer>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
