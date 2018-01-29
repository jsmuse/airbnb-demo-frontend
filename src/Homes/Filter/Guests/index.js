import React from 'react';
import styled from 'styled-components';
import Counter from './../../../UI/Counter';

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

const Label = styled.p`
  margin: 0 0 6px;
  margin-left: 8px;
  font-size: 1.25rem;
  color: #383838;
`;

const SubLabel = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: 'CircularLight';
  font-size: 1rem;
  color: #383838;
`;

export default props => (
  <div>
    <CounterContainer>
      <div>
        <Label>Adults</Label>
      </div>
      <Counter
        plusCounter={props.plusCounter}
        minusCounter={props.minusCounter}
        value={props.guests.adults}
        field="adults"
        minLimit={1}
        maxLimit={16}
        label={props.guests.adults}
      />
    </CounterContainer>

    <CounterContainer>
      <div>
        <Label>Children</Label>
        <SubLabel>Ages 2 — 12</SubLabel>
      </div>
      <Counter
        plusCounter={props.plusCounter}
        minusCounter={props.minusCounter}
        value={props.guests.childrens}
        field="childrens"
        minLimit={0}
        maxLimit={5}
        label={props.guests.childrens}
      />
    </CounterContainer>

    <CounterContainer>
      <div>
        <Label>Infants</Label>
        <SubLabel>Under 2</SubLabel>
      </div>
      <Counter
        plusCounter={props.plusCounter}
        minusCounter={props.minusCounter}
        value={props.guests.infants}
        field="infants"
        minLimit={0}
        maxLimit={5}
        label={props.guests.infants}
      />
    </CounterContainer>
  </div>
);
