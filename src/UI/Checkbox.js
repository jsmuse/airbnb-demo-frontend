import React from 'react';
import styled from 'styled-components';
import check from './check-on.svg';

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  transition: background 0.1s ease-in-out;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  appearance: none;
  margin-right: 12px;
  &:checked {
    border: none;
    background: url(${check}) no-repeat 50% 50%;
    background-color: #008489;
  }
`;

export default props => (
  <Checkbox
    type="checkbox"
    name={props.name}
    id={props.id}
    checked={props.checked}
    onChange={props.onChange}
  />
);
