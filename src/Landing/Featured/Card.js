import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Place = styled.p`
  font-size: 0.9375rem;
  text-align: left;
  margin: 8px 0 0;
  font-family: "CircularBold", san-serif;
`;

export default props => {
  return (
    <Col xs={4} sm={3} md={2}>
      <Card>
        <Image
          src={props.picSrc}
          srcSet={props.picSrc2x}
          alt="image experiense"
        />
        <Place>{props.place}</Place>
      </Card>
    </Col>
  );
};
