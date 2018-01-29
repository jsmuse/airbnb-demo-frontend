import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import Dates from './Dates';
import Guests from './Guests';
import Room from './Room';
import InstantBook from './InstantBook';
import Price from './Price';
import More from './More';
import Dropdown from './Dropdown';

const Filter = styled.div`
  position: fixed;
  top: 83px;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const formatDateLabel = (startDate, endDate) => {
  const formattedStart = moment(startDate).format('MMM D');
  const formattedEnd = moment(endDate).format('MMM D');
  const formattedDayEnd = moment(endDate).format('D');

  if ((startDate, endDate)) {
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${formattedStart} - ${formattedDayEnd}`;
    }
    return `${formattedStart} - ${formattedEnd}`;
  }
  return 'Dates';
};

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

const formatRoomLabel = (entireType, privatType, sharedType) => {
  const allTypes = [entireType, privatType, sharedType];
  const trueValue = allTypes.filter(type => type === true);

  if (trueValue.length > 1) return `Room type · ${trueValue.length}`;
  if (entireType) return 'Entire home';
  if (privatType) return 'Private room';
  if (sharedType) return 'Shared room';
  return 'Room type';
};

const formatPriceLabel = (min, max) => {
  if (min > 1 && max < 40) return `$${min} — $${max}`;
  if (max < 40) return `To $${max}`;
  if (min > 1) return `From $${max}`;
  return 'Price';
};

const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class Filters extends React.Component {
  state = {
    dates: {
      from: null,
      to: null,
      isApply: false,
      isOpen: false,
      name: 'dates',
    },
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
      isApply: false,
      isOpen: false,
      name: 'guests',
    },
    roomType: {
      entire: false,
      privat: false,
      shared: false,
      isApply: false,
      isOpen: false,
      name: 'roomType',
    },
    instantBook: {
      book: false,
      isApply: false,
      isOpen: false,
      name: 'instantBook',
    },
    price: {
      min: 1,
      max: 40,
      isApply: false,
      isOpen: false,
      name: 'price',
    },
    isAnyOpen: null,
    other: {
      heating: false,
      isApply: false,
      isOpen: false,
    },
  };

  onChange = () => {
    this.setState(
      prevState => ({
        instantBook: { ...this.state.instantBook, book: !prevState.book },
      }),
      () => {
        console.log(this.state.instantBook);
      },
    );
  };

  onChangeRoom = (field) => {
    this.setState(prevState => ({
      roomType: { ...this.state.roomType, [field]: !prevState[field] },
    }));
  };

  toggleCheckbox = (field, type) => {
    this.setState(prevState => ({
      [type]: { ...this.state[type], [field]: !prevState[field] },
    }));
  };

  save = (field, value) => {
    this.setState({ [field]: { ...this.state[field], value, isApply: true } });
    this.openModal(field);
  };

  openModal = (field) => {
    if (this.state.isAnyOpen) {
      this.setState({ [this.state.isAnyOpen]: { ...this.state[field], isOpen: false } });
    }

    if (this.state[field].isOpen) {
      this.setState({ [field]: { ...this.state[field], isOpen: false } });
      this.setState({ isAnyOpen: null });
    } else {
      this.setState({ [field]: { ...this.state[field], isOpen: true } });
      this.setState({ isAnyOpen: [field] });
    }
  };

  handleClickOutside = (field) => {
    this.openModal(field);
  };

  resetBook = () => {
    this.setState({
      instantBook: {
        book: false,
        isApply: false,
      },
    });
  };
  resetPrice = () => {
    this.setState({
      price: {
        min: 1,
        max: 40,
      },
    });
  };
  resetDates = () => {
    this.setState((this.state.dates: {
        from: null,
        to: null,
      }));
  };
  resetGuests = () => {
    this.setState({
      guests: {
        adults: 1,
        childrens: 0,
        infants: 0,
      },
    });
  };

  updateValue = (sliderState) => {
    this.setState({
      price: {
        min: sliderState.values[0],
        max: sliderState.values[1],
      },
    });
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

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dropdown
                  btnLabel={formatDateLabel(this.state.dates.from, this.state.dates.to)}
                  mobileTitle="Dates"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.dates.isApply}
                  isOpen={this.state.dates.isOpen}
                  isDisplayBtn="inline-block"
                  widthModal="720px"
                  widthTabletModal="360px"
                  field="dates"
                  value={this.state.dates}
                >
                  <Dates />
                </Dropdown>

                <Dropdown
                  btnLabel={formatGuestLabel(
                    this.state.guests.adults,
                    this.state.guests.childrens,
                    this.state.guests.infants,
                  )}
                  mobileTitle="Guests"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.guests.isApply}
                  isOpen={this.state.guests.isOpen}
                  isDisplayBtn="inline-block"
                  widthModal="330px"
                  widthTabletModal="330px"
                  field="guests"
                  value={this.state.guests}
                >
                  <Guests
                    guests={this.state.guests}
                    plusCounter={this.plusCounter}
                    minusCounter={this.minusCounter}
                  />
                </Dropdown>

                <Dropdown
                  btnLabel={formatRoomLabel(
                    this.state.roomType.entire,
                    this.state.roomType.privat,
                    this.state.roomType.shared,
                  )}
                  mobileTitle="Room types"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.roomType.isApply}
                  isOpen={this.state.roomType.isOpen}
                  isDisplayBtn="none"
                  widthModal="330px"
                  widthTabletModal="330px"
                  field="roomType"
                  value={this.state.roomType}
                >
                  <Room roomType={this.state.roomType} onChangeRoom={this.onChangeRoom} />
                </Dropdown>

                <Dropdown
                  btnLabel={formatPriceLabel(this.state.price.min, this.state.price.max)}
                  mobileTitle="Price"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.price.isApply}
                  isOpen={this.state.price.isOpen}
                  isDisplayBtn="none"
                  widthModal="330px"
                  widthTabletModal="330px"
                  field="price"
                  value={this.state.price}
                >
                  <Price
                    price={this.state.price}
                    formatPriceTitle={formatPriceTitle(this.state.price.min, this.state.price.max)}
                    updateValue={this.updateValue}
                  />
                </Dropdown>
                <Dropdown
                  btnLabel="Instant Book"
                  mobileTitle="Price"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.instantBook.isApply}
                  isOpen={this.state.instantBook.isOpen}
                  isDisplayBtn="none"
                  widthModal="330px"
                  widthTabletModal="330px"
                  field="instantBook"
                  value={this.state.instantBook}
                >
                  <InstantBook instantBook={this.state.instantBook} onChange={this.onChange} />
                </Dropdown>

                <More
                  btnLabel="More"
                  mobileTitle="More"
                  handleClickOutside={this.handleClickOutside}
                  saveData={this.save}
                  openModal={this.openModal}
                  isApply={this.state.other.isApply}
                  isOpen={this.state.other.isOpen}
                  isDisplayBtn="inline-block"
                  widthModal="330px"
                  widthTabletModal="330px"
                  field="other"
                  value={this.state.other}
                  other={this.state.other}
                  roomType={this.state.roomType}
                  onChangeRoom={this.onChangeRoom}
                  price={this.state.price}
                  formatPriceTitle={formatPriceTitle(this.state.price.min, this.state.price.max)}
                  updateValue={this.updateValue}
                  guests={this.state.guests}
                  plusCounter={this.plusCounter}
                  minusCounter={this.minusCounter}
                  instantBook={this.state.instantBook}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}
