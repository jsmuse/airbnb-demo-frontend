import React from 'react';
import styled from 'styled-components';
import close from './../close.svg';
import Room from './../Room';

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
  cursor: pointer;
  color: ${props => (props.isOpen || props.isApply ? '#fff' : '#383838')};
  background: ${props => (props.isOpen || props.isApply ? '#008489' : 'transparent')};
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

export default class Price extends React.Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal isApply={this.state.isApply} isOpen={this.state.isOpen} onClick={this.openModal}>
          More filters
        </BtnModal>
        {this.state.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>All filters (0)</Text>
                <Reset onClick={this.resetPrice}>Reset</Reset>
              </Wrapper>
            </HeaderModal>
            <Main>
              <Footer>
                <BtnCancel onClick={this.handleClickOutside}>Cancel</BtnCancel>
                <BtnApply onClick={this.savePrice}>Apply</BtnApply>
              </Footer>
            </Main>

            <FooterMobile>
              <SaveBtn onClick={this.savePrice}>Save</SaveBtn>
            </FooterMobile>
          </div>
        )}
      </BtnContainer>
    );
  }
}