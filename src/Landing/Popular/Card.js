import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

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

export default props => (
  <Col xs={6} sm={4} md={3}>
    <Card>
      <Image
        src={props.picSrc}
        srcSet={props.picSrc2x}
        alt="image experiense"
      />
      <Row start="xs" top="xs">
        <Col xs>
          <TextContainer>
            <Place>{props.place}</Place>
          </TextContainer>
        </Col>
      </Row>
      <Row start="xs" top="xs">
        <Col xs>
          <TextContainer>
            <Name>{props.title}</Name>
          </TextContainer>
        </Col>
      </Row>
      <Row start="xs">
        <Col xs>
          <TextContainer>
            <Price>About ${props.price} per person</Price>
          </TextContainer>
        </Col>
      </Row>
    </Card>
  </Col>
);
