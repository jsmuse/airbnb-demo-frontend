import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import './rheostat.css';

const HistogramContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 5%;
  height: 40px;
  margin-top: 120px;
`;
const HistogramLineContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 32px;
  align-items: flex-end;
`;
const HistogramLine = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  left: ${props => `${props.length}px`};
  width: 6px;
  height: ${props => `${props.height}px`};
  background: #d8d8d8;
`;

const arrayPrices = [
  13,
  20,
  10,
  35,
  30,
  25,
  20,
  40,
  45,
  50,
  60,
  68,
  75,
  80,
  76,
  69,
  57,
  50,
  48,
  40,
  33,
  20,
];

const HistogramLines = props => (
  <React.Fragment>
    {props.height.map(value => <HistogramLine length={props.height.length} height={value} />)}
  </React.Fragment>
);

export default function HistogramMain(props) {
  return (
    <HistogramContainer>
      <HistogramLineContainer>
        <HistogramLines length={arrayPrices.length} height={arrayPrices} />
      </HistogramLineContainer>
      <Rheostat min={1} max={40} step="1" onValuesUpdated={props.updateValue} values={[1, 40]} />
    </HistogramContainer>
  );
}
