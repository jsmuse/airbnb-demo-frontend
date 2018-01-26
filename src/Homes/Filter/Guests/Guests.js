import React from 'react';
import styled from 'styled-components';
import close from './../close1.svg';
import Minus from './MinusBtn';
import Plus from './PlusBtn';

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.button`
  display: inline-block;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 16px;
  font-size: 0.875rem;
  margin: 12px 11px 12px 0;

  color: ${props => (props.isOpen ? '#fff' : '#383838')};
  background: ${props => (props.isOpen ? '#008489' : 'transparent')};
`;

const Overlay = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: block;
    position: fixed;
    top: 140px;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    opacity: 0.8;
    z-index: 0;
  }
`;

const Main = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 10;
  left: 0;
  top: 0;
  height: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  width: 100%;
  padding: 160px 0 70px;
  box-sizing: border-box;
  @media (min-width: 575px) {
    position: absolute;
    top: 53px;
    left: 0;
    height: auto;
    width: 360px;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  }
`;

const FooterMobile = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 97%;
  z-index: 102;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-shadow: 0px -1px 0px #d5d5d5;
  @media (min-width: 575px) {
    display: none;
  }
`;

const SaveBtn = styled.button`
  background: #ff5a5f;
  border: none;
  border-radius: 4px;
  padding: 16px 0;
  width: 100%;
  font-size: 1.125rem;
  color: #ffffff;
  @media (min-width: 575px) {
    display: none;
  }
`;
const Footer = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: flex;
    justify-content: space-between;
  }
`;

const BtnCancel = styled.button`
  display: none;
  @media (min-width: 575px) {
    display: inline-block;
    font-size: 1rem;
    text-align: center;
    color: #636363;
    background: #fff;
    border: none;
    width: 110px;
    height: 64px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BtnApply = styled.button`
  display: none;
  @media (min-width: 575px) {
    display: inline-block;
    font-size: 1rem;
    text-align: center;
    color: #0f7276;
    background: #fff;
    border: none;
    width: 110px;
    height: 64px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px 0;
`;

const Close = styled.button`
  background: url(${close}) no-repeat;
  border: none;
  width: 16px;
  height: 16px;
`;
const Text = styled.p`
  margin: 0 0 14px;
  color: #383838;
  font-size: 0.875rem;
`;
const Reset = styled.button`
  margin: 0 0 14px;
  font-size: 0.875rem;
  border: none;
  background: none;
  color: #0f7276;
`;

const HeaderModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  z-index: 100;
  @media (min-width: 575px) {
    display: none;
  }
`;
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

const ContedLabel = styled.p`
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
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();

    this.resetGuests();
  };

  resetGuests = () => {
    this.setState({ adults: 1, childrens: 0, infants: 0 });
  };

  plusCounter = (field, value, maxLimit) => {
    if (value < maxLimit ? this.setState({ [field]: value + 1 }) : 0);
  };

  minusCounter = (field, value, minLimit) => {
    if (value > minLimit ? this.setState({ [field]: value - 1 }) : 0);
  };

  saveGuests = () => {
    this.props.saveGuests(this.state.adults, this.state.childrens, this.state.infants);

    this.openModal();
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal isAnyOpen={this.props.isAnyOpen} onClick={this.openModal}>
          {formatGuestLabel(this.state.adults, this.state.childrens, this.state.infants)}
        </BtnModal>
        {this.state.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>Guests</Text>
                <Reset onClick={this.resetGuests}>Reset</Reset>
              </Wrapper>
            </HeaderModal>
            <Main>
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
                  <ContedLabel>{this.state.adults}+</ContedLabel>
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
                  <ContedLabel>{this.state.childrens}+</ContedLabel>
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
                  <ContedLabel>{this.state.infants}+</ContedLabel>
                  <Plus
                    value={this.state.infants}
                    field="infants"
                    plusCounter={this.plusCounter}
                    maxLimit={5}
                  />
                </Counter>
              </CounterContainer>

              <Footer>
                <BtnCancel onClick={this.handleClickOutside}>Cancel</BtnCancel>
                <BtnApply onClick={this.saveGuests}>Apply</BtnApply>
              </Footer>
            </Main>

            <FooterMobile>
              <SaveBtn onClick={this.saveGuests}>Save</SaveBtn>
            </FooterMobile>
          </div>
        )}
        {this.state.isOpen && <Overlay onClick={this.handleClickOutside} />}
      </BtnContainer>
    );
  }
}
