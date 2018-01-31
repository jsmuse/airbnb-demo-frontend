import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dates from './Dates';
import Guests from './Guests';
import Room from './Room';
import InstantBook from './InstantBook';
import Price from './Price';
import More from './More';

const Filter = styled.div`
  position: fixed;
  top: 82px;
  width: 100%;
  z-index: 100;
  background: #fff;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

export default class Filters extends React.Component {
  state = {
    dates: {
      startDate: null,
      endDate: null,
    },
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
    },
    roomType: {
      entire: false,
      privat: false,
      shared: false,
    },
    instantBook: {
      book: false,
    },
    price: {
      min: 1,
      max: 40,
    },
    other: {
      bathrooms: 0,
      beds: 0,
      bedrooms: 0,
      superhost: false,
      instantBook: false,
      isOpen: false,
      heating: false,
      tv: false,
      kitchen: false,
      wifi: false,
      elebator: false,
      pool: false,
      parking: false,
      wheelchair: false,
    },
    openedFilter: null,
  };

  save = (field, value) => {
    this.setState({ [field]: value }, () => {
      console.log(this.state);
    });
  };

  saveAll = (obj) => {
    Object.keys(obj).map(key =>
      this.setState({
        [key]: obj[key],
      }));
  };

  openFilter = (key) => {
    this.setState({ openedFilter: key });
  };

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dates
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="dates"
                  handleOpen={this.openFilter}
                />
                <Guests
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="guests"
                  handleOpen={this.openFilter}
                />
                <Room
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="room"
                  handleOpen={this.openFilter}
                />
                <Price
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="price"
                  handleOpen={this.openFilter}
                />
                <InstantBook
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="instantBook"
                  handleOpen={this.openFilter}
                />
                <More
                  save={this.save}
                  openedFilter={this.state.openedFilter}
                  id="more"
                  handleOpen={this.openFilter}
                />
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}
