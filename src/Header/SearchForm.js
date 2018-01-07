import React from "react";
import styled from "styled-components";
import searchIcon from "./search.svg";

const Container = styled.div`
  position: relative;
`;

const Search = styled.input`
  width: 100%;
  padding: 12px 12px 12px 53px;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;
`;

const Icon = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  margin: 13px 16px;
  background-image: url(${searchIcon});
  height: 20px;
  width: 20px;
`;

export default () => {
  return (
    <Container>
      <Icon />
      <Search type="text" placeholder="Try “Miami”" />
    </Container>
  );
};
