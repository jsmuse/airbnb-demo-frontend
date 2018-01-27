import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
import check from './check-on.svg';
import plus from './plus.svg';

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
    isApply: false,
  };

  onChange = () => {
    this.setState(prevState => ({ book: !prevState.book }));
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
      isApply: false,
    });
  };

  saveBook = () => {
    this.props.saveBook(this.state.book);
    this.openModal();
    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  render() {
    return (
      <Dropdown
        btnLabel="Instant Book"
        mobileTitle="Price"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveBook}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen}
        isDisplayBtn="none"
      >
        <BookContainer>
          <div>
            <Label>Instant Book</Label>
            <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
          </div>
          <SwitchInput type="checkbox" checked={this.state.book} onChange={this.onChange} />
        </BookContainer>
      </Dropdown>
    );
  }
}
