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

export default class MinusBtn extends React.Component {
  minus = () => {
    this.props.minusCounter(this.props.field, this.props.value, this.props.minLimit);
  };
  render() {
    return <Minus onClick={this.minus} />;
  }
}
