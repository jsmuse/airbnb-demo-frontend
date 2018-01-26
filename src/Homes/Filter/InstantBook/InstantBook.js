import React from 'react';
import styled from 'styled-components';
import close from './../close1.svg';
import check from './check-on.svg';
import plus from './plus.svg';

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 16px;
    font-size: 0.875rem;
    margin: 12px 11px 12px 0;

    color: ${props => (props.isOpen ? '#fff' : '#383838')};
    background: ${props => (props.isOpen ? '#008489' : 'transparent')};
  }
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
    width: 326px;
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

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
`;

const Label = styled.p`
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

export default class Dates extends React.Component {
  state = {
    book: false,
    isOpen: false,
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();

    this.resetBook();
  };

  resetBook = () => {
    this.setState({
      book: false,
    });
  };

  saveBook = () => {
    this.props.saveBook(this.state.book);
    this.openModal();
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal isOpen={this.state.isOpen} onClick={this.openModal}>
          Instant Book
        </BtnModal>
        {this.state.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>Guests</Text>
                <Reset onClick={this.resetBook}>Reset</Reset>
              </Wrapper>
            </HeaderModal>
            <Main>
              <BookContainer>
                <div>
                  <Label>Instant Book</Label>
                  <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
                </div>
                <SwitchInput type="checkbox" value={this.state.book} />
              </BookContainer>
              <Footer>
                <BtnCancel onClick={this.handleClickOutside}>Cancel</BtnCancel>
                <BtnApply onClick={this.saveBook}>Apply</BtnApply>
              </Footer>
            </Main>

            <FooterMobile>
              <SaveBtn onClick={this.saveBook}>Save</SaveBtn>
            </FooterMobile>
          </div>
        )}
        {this.state.isOpen && <Overlay onClick={this.handleClickOutside} />}
      </BtnContainer>
    );
  }
}
