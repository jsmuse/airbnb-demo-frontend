import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  @media (min-width: 575px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;

const Text = styled.h3`
  font-family: "CircularBold", san-serif;
  color: #383838;
  font-size: 1.0625rem;
  margin-left: 12px;
  @media (min-width: 575px) {
    margin-left: 24px;
  }
`;

const Picture = styled.img`
  width: 101%;
  height: 101%;
  margin-right: -1px;
  margin-bottom: -1px;
  margin-left: -1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  @media (min-width: 575px) {
    width: 96px;
    height: 72px;
    margin-top: -1px;
    margin-bottom: -1px;
    margin-left: -1px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export default props => {
  return (
    <Col xs={6} sm={5} md={4}>
      <Container to={props.children}>
        <Picture src={props.picSrc} srcSet={props.pic2xSrc} alt="img explore" />
        <Text>{props.children}</Text>
      </Container>
    </Col>
  );
};
