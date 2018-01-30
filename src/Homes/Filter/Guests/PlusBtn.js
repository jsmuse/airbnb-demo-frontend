import React from 'react';
import styled from 'styled-components';
import plus from './plus.svg';

const Plus = styled.button`
  background: url(${plus}) no-repeat 50% 50%;
  box-sizing: border-box;
  border: 1px solid #008489;
  border-radius: 22px;
  width: 32px;
  height: 32px;
`;

export default function PlusBtn(props) {
  return <Plus onClick={() => props.plusCounter(props.field, props.value, props.maxLimit)} />;
}
