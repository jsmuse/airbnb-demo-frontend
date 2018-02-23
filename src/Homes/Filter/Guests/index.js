import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
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
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
    },
    isOpen: false,
    isApply: false,
  };

  openModal = () => {
    if (this.props.openedFilter) {
      this.props.handleOpen(this.props.id);

      if (!this.state.isOpen) {
        this.setState({ isOpen: true }, () => {
          this.props.handleOpen(this.props.id);
        });
      }
    } else {
      if (!this.state.isOpen) {
        this.setState({ isOpen: true }, () => {
          this.props.handleOpen(this.props.id);
        });
      }
      if (this.state.isOpen) {
        this.setState({ isOpen: false }, () => {
          this.props.handleOpen(null);
        });
      }
    }
  };

  handleClickOutside = () => {
    this.openModal();
    this.resetGuests();
  };

  resetGuests = () => {
    this.setState(
      {
        guests: {
          adults: 1,
          childrens: 0,
          infants: 0,
        },
        isOpen: false,
        isApply: false,
      },
      () => {
        this.props.handleOpen(null);
      },
    );
  };

  plusCounter = (field, value, maxLimit) => {
    if (value < maxLimit) {
      this.setState({
        guests: { ...this.state.guests, [field]: value + 1 },
      });
    }
  };

  minusCounter = (field, value, minLimit) => {
    if (value > minLimit) {
      this.setState({
        guests: { ...this.state.guests, [field]: value - 1 },
      });
    }
  };

  saveGuests = () => {
    this.setState({ isOpen: false }, () => {
      this.props.save('guests', this.state.guests);
    });

    this.setState({ isApply: true, isOpen: false });
  };

  render() {
    return (
      <Dropdown
        btnLabel={formatGuestLabel(
          this.state.guests.adults,
          this.state.guests.childrens,
          this.state.guests.infants,
        )}
        mobileTitle="Guests"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveGuests}
        reset={this.resetGuests}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen && this.props.openedFilter === this.props.id}
        isDisplayBtn="inline-block"
        widthModal="330px"
        widthTabletModal="330px"
      >
        <CounterContainer>
          <div>
            <Label>Adults</Label>
          </div>
          <Counter
            minusCounter={this.minusCounter}
            value={this.state.guests.adults}
            field="adults"
            minLimit={1}
            plusCounter={this.plusCounter}
            maxLimit={16}
            label={this.state.guests.adults}
          />
        </CounterContainer>
        <CounterContainer>
          <div>
            <Label>Children</Label>
            <SubLabel>Ages 2 — 12</SubLabel>
          </div>
          <Counter
            minusCounter={this.minusCounter}
            value={this.state.guests.childrens}
            field="childrens"
            minLimit={0}
            plusCounter={this.plusCounter}
            maxLimit={5}
            label={this.state.guests.childrens}
          />
        </CounterContainer>

        <CounterContainer>
          <div>
            <Label>Infants</Label>
            <SubLabel>Under 2</SubLabel>
          </div>
          <Counter
            minusCounter={this.minusCounter}
            value={this.state.guests.infants}
            field="infants"
            minLimit={0}
            plusCounter={this.plusCounter}
            maxLimit={5}
            label={this.state.guests.infants}
          />
        </CounterContainer>
      </Dropdown>
    );
  }
}
