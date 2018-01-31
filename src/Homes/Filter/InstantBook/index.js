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

export default class Book extends React.Component {
  state = {
    instantBook: {
      book: false,
    },
    isOpen: false,
    isApply: false,
  };

  toggleCheckbox = (field) => {
    if (this.state.instantBook[field]) {
      this.setState({
        instantBook: { ...this.state.instantBook, [field]: false },
      });
    } else {
      this.setState({
        instantBook: { ...this.state.instantBook, [field]: true },
      });
    }
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
    this.resetBook();
  };

  resetBook = () => {
    this.setState({
      instantBook: {
        book: false,
      },
      isApply: false,
      isOpen: false,
    });
  };

  saveBook = () => {
    this.setState({ instantBook: { ...this.state.instantBook } }, () => {
      this.props.save('instantBook', this.state.instantBook);
      this.props.handleOpen(null);
    });

    this.setState({ isApply: true, isOpen: false });
  };

  render() {
    return (
      <Dropdown
        btnLabel="Instant Book"
        mobileTitle="Instant Book"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveBook}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen && this.props.openedFilter === this.props.id}
        isDisplayBtn="none"
        widthModal="330px"
        widthTabletModal="330px"
      >
        <BookContainer>
          <div>
            <Label>Instant Book</Label>
            <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
          </div>
          <Switch
            id="book"
            checked={this.state.instantBook.book}
            onChange={() => this.toggleCheckbox('book')}
          />
        </BookContainer>
      </Dropdown>
    );
  }
}
