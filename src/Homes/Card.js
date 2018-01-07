import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import star from "./star.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.p`
  margin: 0 6px 0 0;
  display: inline-block;
`;
const Name = styled.p`
  margin: 8px 0 0;
  font-family: "CircularBold", san-serif;
  font-size: 0.9375rem;
`;

const Options = styled.p`
  font-size: 0.9375rem;
  font-family: CircularLight, san-serif;
  margin: 2px 0 6px;
`;

const Owners = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const Star = styled.img`
  margin-right: 4px;
  &:last-of-type {
    margin-right: 8px;
  }
`;
export default () => {
  return (
    <Col xs={6} sm={5} md={4}>
      <Card>
        <Image src={image} srcSet={image2x} alt="image experiense" />
        <Row start="xs" top="xs">
          <Col xs>
            <TextContainer>
              <Name>
                <Price>$82</Price>
                La Salentina, see, nature & relax
              </Name>
            </TextContainer>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs>
            <TextContainer>
              <Options>Entire house · 9 beds</Options>
            </TextContainer>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs>
            <TextContainer>
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />

              <Owners>97 · Superhost</Owners>
            </TextContainer>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
