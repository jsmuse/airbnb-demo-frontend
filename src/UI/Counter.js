import React from 'react';
import styled from 'styled-components';
import minus from './minus.svg';
import plus from './plus-light.svg';

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 114px;
`;

const CountedLabel = styled.p`
  margin: 4px 0;
  font-family: 'CircularLight';
  font-size: 1.125rem;
  color: #383838;
`;
const Plus = styled.button`
  background: url(${plus}) no-repeat 50% 50%;
  box-sizing: border-box;
  border: 1px solid #008489;
  border-radius: 22px;
  width: 32px;
  height: 32px;
`;

const Minus = styled.button`
  box-sizing: border-box;
  border: 1px solid #008489;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  background: url(${minus}) no-repeat 50% 50%;
`;

export default props => (
  <Counter>
    <Minus onClick={() => props.minusCounter(props.field, props.value, props.minLimit)} />
    <CountedLabel>{props.label}+</CountedLabel>
    <Plus onClick={() => props.plusCounter(props.field, props.value, props.maxLimit)} />
  </Counter>
);
