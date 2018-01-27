import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import './rheostat.css';
import close from './../close.svg';

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
    cursor: pointer;
    color: ${props => (props.isOpen || props.isApply ? '#fff' : '#383838')};
    background: ${props => (props.isOpen || props.isApply ? '#008489' : 'transparent')};
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

const PriceContainer = styled.div`
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

const formatPriceLabel = (min, max) => {
  if (min > 1 && max < 40) return `$${min} — $${max}`;
  if (max < 40) return `To $${max}`;
  if (min > 1) return `From $${max}`;
  return 'Price';
};

const HistogramLines = props => (
  <React.Fragment>
    {props.height.map(value => <HistogramLine length={props.height.length} height={value} />)}
  </React.Fragment>
);

const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class Price extends React.Component {
  state = {
    isOpen: false,
    isApply: false,
    min: 1,
    max: 40,
  };

  onChange = () => {
    this.setState(prevState => ({ book: !prevState.book }));
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();

    this.resetPrice();
  };

  resetPrice = () => {
    this.setState({
      min: 1,
      max: 40,
      isApply: false,
    });
  };

  updateValue = (sliderState) => {
    this.setState({
      min: sliderState.values[0],
      max: sliderState.values[1],
    });
  };

  savePrice = () => {
    this.props.savePrice(this.state.min, this.state.max);
    this.openModal();
    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  render() {
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
    return (
      <BtnContainer>
        <BtnModal isApply={this.state.isApply} isOpen={this.state.isOpen} onClick={this.openModal}>
          {formatPriceLabel(this.state.min, this.state.max)}
        </BtnModal>
        {this.state.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>Guests</Text>
                <Reset onClick={this.resetPrice}>Reset</Reset>
              </Wrapper>
            </HeaderModal>
            <Main>
              <PriceContainer>
                <Label>{formatPriceTitle(this.state.min, this.state.max)}</Label>
                <SubLabel>The average nightly price is $75.</SubLabel>
                <HistogramContainer>
                  <HistogramLineContainer>
                    <HistogramLines height={arrayPrices} length={arrayPrices.length} />
                  </HistogramLineContainer>
                  <Rheostat
                    min={1}
                    max={40}
                    step="1"
                    onValuesUpdated={this.updateValue}
                    values={[1, 40]}
                  />
                </HistogramContainer>
              </PriceContainer>
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
        {this.state.isOpen && <Overlay onClick={this.handleClickOutside} />}
      </BtnContainer>
    );
  }
}
