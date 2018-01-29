import React from 'react';
import styled from 'styled-components';
import Histogram from './../../../UI/Histogram';

const MainContainer = styled.div`
  padding: 16px 16px 0;
  margin: 8px 0;
`;

const Label = styled.p`
  font-family: 'CircularLight';
  margin: 0 0 6px 0;
  font-size: 1rem;
  color: #383838;
`;
const SubLabel = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 0.75rem;
  color: #383838;
  max-width: 195px;
`;

export default props => (
  <MainContainer>
    <Label>{props.formatPriceTitle}</Label>
    <SubLabel>The average nightly price is $75.</SubLabel>
    <Histogram updateValue={props.updateValue} />
  </MainContainer>
);
