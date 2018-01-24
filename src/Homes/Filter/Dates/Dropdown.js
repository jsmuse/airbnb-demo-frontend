import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import moment from "moment";

export default class Dropdown extends React.Component {
  state = {
    isOpen: false,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    isApply: false
  };

  handleClickOutside = () => {
    this.setState(prevState => ({
      isOpen: false
    }));
  };

  dateChange = () => {
    this.setState(prevState => ({
      startDate: null,
      endDate: null
    }));
  };
  /*
  applyDates = () => {
    this.setState({ isApply: true });
    this.openModal();
  };*/

  onChange = (startDate, endDate) => {
    this.setState({ startDate, endDate });
  };

  cancelDates = (startDate, endDate) => {
    this.setState({ startDate: null, endDate: null });
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal isOpen={this.props.isOpen} onClick={this.props.openModal}>
          {formatDateLabel(this.state.startDate, this.state.endDate)}
        </BtnModal>
        {this.state.isOpen && (
          <Dates
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.onChange}
            cancelDates={this.cancelDates}
            openModal={this.props.openModal}
            applyDates={this.applyDates}
            saveDates={this.props.saveDates}
          />
        )}
        {this.state.isOpen && <Overlay onClick={this.handleClickOutside} />}
      </BtnContainer>
    );
  }
}
