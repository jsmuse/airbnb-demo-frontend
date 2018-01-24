import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
  text-align: left;
  font-family: "CircularBold", san-serif;
`;

export default props => {
  return <Title> {props.children} </Title>;
};
