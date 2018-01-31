import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
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

const formatPriceLabel = (min, max) => {
  if (min > 1 && max < 40) return `$${min} — $${max}`;
  if (max < 40) return `To $${max}`;
  if (min > 1) return `From $${max}`;
  return 'Price';
};

const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class Price extends React.Component {
  state = {
    isApply: false,
    price: {
      min: 1,
      max: 40,
    },
    isOpen: false,
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
    this.resetPrice();
  };

  resetPrice = () => {
    this.setState({
      price: {
        min: 1,
        max: 40,
      },
      isApply: false,
      isOpen: false,
    });
  };

  updateValue = (sliderState) => {
    this.setState({
      price: {
        ...this.state.price,
        min: sliderState.values[0],
        max: sliderState.values[1],
      },
    });
  };

  savePrice = () => {
    this.setState({ price: { ...this.state.price } }, () => {
      this.props.save('price', this.state.price);
      this.props.handleOpen(null);
    });

    this.setState({ isApply: true, isOpen: false });
  };

  render() {
    return (
      <Dropdown
        btnLabel={formatPriceLabel(this.state.price.min, this.state.price.max)}
        mobileTitle="Price"
        handleClickOutside={this.handleClickOutside}
        saveData={this.savePrice}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen && this.props.openedFilter === this.props.id}
        isDisplayBtn="none"
        widthModal="330px"
        widthTabletModal="330px"
      >
        <MainContainer>
          <Label>{formatPriceTitle(this.state.price.min, this.state.price.max)}</Label>
          <SubLabel>The average nightly price is $75.</SubLabel>
          <Histogram
            updateValue={this.updateValue}
            min={this.state.price.min}
            max={this.state.price.max}
          />
        </MainContainer>
      </Dropdown>
    );
  }
}
