import React from 'react';
import styled from 'styled-components';
import Minus from './MinusBtn';
import Plus from './PlusBtn';
import Dropdown from './../Dropdown';

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

const TextContainer = styled.div`
  margin-left: 8px;
`;
const Label = styled.p`
  margin: 0 0 6px;
  font-size: 1.25rem;
  color: #383838;
`;
const SubLabel = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 1rem;
  color: #383838;
`;
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

const formatGuestLabel = (adults, childrens, infants) => {
  const total = adults + childrens;
  if (total > 1) {
    if (infants > 0) {
      return `${total} guests, ${infants} infants`;
    }
    return `${total} guests`;
  }
  return 'Guests';
};

export default class Dates extends React.Component {
  state = {
    adults: 1,
    childrens: 0,
    infants: 0,
    isOpen: false,
    isApply: false,
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();

    this.resetGuests();
  };

  resetGuests = () => {
    this.setState({
      adults: 1,
      childrens: 0,
      infants: 0,
      isApply: false,
      isOpen: false,
    });
  };
  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  plusCounter = (field, value, maxLimit) => {
    if (value < maxLimit) {
      this.setState({ [field]: value + 1 });
    }
  };

  minusCounter = (field, value, minLimit) => {
    if (value > minLimit) {
      this.setState({ [field]: value - 1 });
    }
  };

  saveGuests = () => {
    this.props.saveGuests(this.state.adults, this.state.childrens, this.state.infants);
    this.openModal();
    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  render() {
    return (
      <Dropdown
        btnLabel={formatGuestLabel(this.state.adults, this.state.childrens, this.state.infants)}
        mobileTitle="Guests"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveGuests}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen}
        isDisplayBtn="inline-block"
      >
        <CounterContainer>
          <TextContainer>
            <Label>Adults</Label>
          </TextContainer>
          <Counter>
            <Minus
              minusCounter={this.minusCounter}
              value={this.state.adults}
              field="adults"
              minLimit={1}
            />
            <CountedLabel>{this.state.adults}+</CountedLabel>
            <Plus
              value={this.state.adults}
              field="adults"
              plusCounter={this.plusCounter}
              maxLimit={16}
            />
          </Counter>
        </CounterContainer>

        <CounterContainer>
          <TextContainer>
            <Label>Children</Label>
            <SubLabel>Ages 2 — 12</SubLabel>
          </TextContainer>
          <Counter>
            <Minus
              minusCounter={this.minusCounter}
              value={this.state.childrens}
              field="childrens"
              minLimit={0}
            />
            <CountedLabel>{this.state.childrens}+</CountedLabel>
            <Plus
              value={this.state.childrens}
              field="childrens"
              plusCounter={this.plusCounter}
              maxLimit={5}
            />
          </Counter>
        </CounterContainer>

        <CounterContainer>
          <TextContainer>
            <Label>Infants</Label>
            <SubLabel>Under 2</SubLabel>
          </TextContainer>
          <Counter>
            <Minus
              minusCounter={this.minusCounter}
              value={this.state.infants}
              field="infants"
              minLimit={0}
            />
            <CountedLabel>{this.state.infants}+</CountedLabel>
            <Plus
              value={this.state.infants}
              field="infants"
              plusCounter={this.plusCounter}
              maxLimit={5}
            />
          </Counter>
        </CounterContainer>
      </Dropdown>
    );
  }
}
