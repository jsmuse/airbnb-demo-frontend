import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import star from './star.svg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 40px;
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
  font-family: 'CircularBold', san-serif;
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

const roomType = {
  entire_home: 'Entire home',
  private_room: 'Private room',
  shared_room: 'Shared room',
};

const formatBedsCount = quantity => (quantity > 1 ? `${quantity} beds` : `${quantity} bed`);

export default props => (
  <Card>
    <Image src={props.picSrc} srcSet={props.picSrc2x} alt="image experiense" />
    <Row start="xs">
      <Col xs>
        <TextContainer>
          <Name>
            <Price>${props.price}</Price>
            {props.title}
          </Name>
        </TextContainer>
      </Col>
    </Row>
    <Row start="xs">
      <Col xs>
        <TextContainer>
          <Options>
            {roomType[props.rentType]} · {formatBedsCount(props.bedsCount)}
          </Options>
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
          <Owners>
            {props.reviewsCount} {props.houseGrade}
          </Owners>
        </TextContainer>
      </Col>
    </Row>
  </Card>
);
