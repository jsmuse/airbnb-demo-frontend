import React from "react";
import styled from "styled-components";
import next from "./next.svg";

const BtnNext = styled.button`
  display: none;
  cursor: pointer;
  @media (min-width: 768px) {
    position: absolute;
    top: 35%;
    right: -20px;
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
    border-radius: 20px;
  }
`;

export default () => {
  return (
    <BtnNext>
      <img src={next} alt="arrow" />
    </BtnNext>
  );
};
