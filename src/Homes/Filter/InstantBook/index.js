import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
import Switch from './../../../UI/Switch';

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

export default class Dates extends React.Component {
  state = {
    instantBook: {
      book: false,
    },
    isOpen: false,
    isApply: false,
  };

  onChange = () => {
    this.setState(prevState => ({
      instantBook: { ...this.state.instantBook, book: !prevState.book },
    }));
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
      instantBook: {
        book: false,
      },
      isApply: false,
    });
  };

  saveBook = () => {
    this.props.saveBook(this.state.instantBook);
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
        widthModal="330px"
        widthTabletModal="330px"
      >
        <BookContainer>
          <div>
            <Label>Instant Book</Label>
            <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
          </div>
          <Switch id="book" checked={this.state.instantBook.book} onChange={this.onChange} />
        </BookContainer>
      </Dropdown>
    );
  }
}
