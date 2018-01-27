import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import Dropdown from './../Dropdown';
import './rheostat.css';

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
      <Dropdown
        btnLabel={formatPriceLabel(this.state.min, this.state.max)}
        mobileTitle="Price"
        handleClickOutside={this.handleClickOutside}
        saveData={this.savePrice}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen}
        isDisplayBtn="none"
        widthModal="330px"
        widthTabletModal="330px"
      >
        <MainContainer>
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
        </MainContainer>
      </Dropdown>
    );
  }
}
