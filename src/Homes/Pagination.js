import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import arrow from "./arrow.svg";

const Pagination = styled.div`
  padding: 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnActivePage = styled.a`
  background: #008489;
  border-radius: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  font-size: 0.9375rem;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const BtnPage = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #008489;
  cursor: pointer;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  font-size: 0.9375rem;
  margin: 0 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const BtnNextPage = styled.a`
  color: #008489;
  cursor: pointer;
  width: 32px;
  height: 32px;
  font-size: 0.9375rem;
  border-radius: 16px;
  border: 1px solid #008489;
  display: flex;
  justify-content: center;
  margin-left: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => {
  return (
    <Row center="xs">
      <Col>
        <Pagination>
          <BtnActivePage>1</BtnActivePage>
          <BtnPage>2</BtnPage>
          <BtnPage>3</BtnPage>
          <BtnPage>...</BtnPage>
          <BtnPage>17</BtnPage>
          <BtnNextPage>
            <img src={arrow} alt="arrow" />
          </BtnNextPage>
        </Pagination>
      </Col>
    </Row>
  );
};
