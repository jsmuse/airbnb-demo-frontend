import React from 'react';
import styled from 'styled-components';
import check from './check-on-green.svg';
import plus from './plus.svg';

const SwitchInput = styled.input`
  appearance: none;
  width: 64px;
  height: 40px;
  background: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:checked {
    background: #008489;
    border: 1px solid rgba(0, 132, 137, 0.3);
    &:after {
      left: 24px;
      background: url(${check}) no-repeat 50% 50% #fff;
    }
  }
  &::after {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    background: url(${plus}) no-repeat 50% 50% #fff;
    border: 1px solid rgba(72, 72, 72, 0.3);
    box-sizing: border-box;
    border-radius: 20px;
    left: -1px;
    top: -1px;
    transition: all 0.2s ease-in-out;
  }
`;

export default props => (
  <SwitchInput type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange} />
);
