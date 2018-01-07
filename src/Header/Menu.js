import React from "react";
import styled from "styled-components";
import logo from "./ic-airbnb.svg";
import arrow from "./Shape.svg";

const Menu = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.img`
  margin-left: 4px;
  @media (min-width: 320px) {
    margin-left: 6px;
  }
`;

export default () => {
  return (
    <Menu>
      <img src={logo} alt="logo" />
      <Arrow src={arrow} alt="arrow" />
    </Menu>
  );
};
