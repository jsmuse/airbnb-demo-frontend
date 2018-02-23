import React from 'react';
import styled from 'styled-components';
import minus from './minus.svg';

const Minus = styled.button`
  box-sizing: border-box;
  border: 1px solid #008489;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  background: url(${minus}) no-repeat 50% 50%;
`;

export default function MinusBtn(props) {
  return <Minus onClick={() => props.minusCounter(props.field, props.value, props.minLimit)} />;
}
