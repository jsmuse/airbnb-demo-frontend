import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Dates from "./Dates/Dates";

const Button = styled.button`
  display: inline-block;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 16px;
  font-size: 0.875rem;
  margin: 12px 11px 12px 0;
  &:hover {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }
  &:focus {
    background: #008489;
    color: #ffffff;
    border-color: #008489;
  }
`;

const HiddenBtn = styled.button`
  display: none;
  &:hover {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }
  @media (min-width: 768px) {
    display: inline-block;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 16px;
    font-size: 0.875rem;
    margin: 12px 11px 12px 0;
  }
`;

const Filter = styled.div`
  position: fixed;
  top: 82px;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default class Filters extends React.Component {
  state = {
    isOpen: false,
    startDate: null,
    endDate: null
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  saveDates = (startDate, endDate) => {
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  };

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dates
                  saveDates={this.saveDates}
                  openModal={this.openModal}
                  isOpen={this.state.isOpen}
                />
                <Button>Guests</Button>
                <HiddenBtn>Room type</HiddenBtn>
                <HiddenBtn>Price</HiddenBtn>
                <HiddenBtn>Instant book</HiddenBtn>
                <Button>More filters</Button>
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}
