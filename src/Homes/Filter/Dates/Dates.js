import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./dayPicker.css";
import close from "./close1.svg";
import arrow from "../../arrow-calendar.svg";
import moment from "moment";

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.button`
  display: inline-block;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 16px;
  font-size: 0.875rem;
  margin: 12px 11px 12px 0;

  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};
`;

const Overlay = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: block;
    position: fixed;
    top: 140px;
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
    width: 360px;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  }
  @media (min-width: 768px) {
    width: 720px;
  }
`;

const FooterMobile = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
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
  margin: 0;
  color: #383838;
  font-size: 0.875rem;
`;
const Reset = styled.button`
  margin: 0;
  font-size: 0.875rem;
  border: none;
  background: none;
  color: #0f7276;
`;

const CheckIn = styled.button`
  font-family: "CircularLight", sans-serif;
  padding: 0 0 6px 0;
  font-size: 1.125rem;
  border: none;
  background: none;
  color: #636363;
  margin: 40px 16px 16px;
  color: #008489;
  border-bottom: 1px solid #008489;
`;

const WeekdayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
`;
const WeekDay = styled.p`
  font-size: 0.75rem;
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

const getLabelCheckIn = startDate => {
  if (startDate) {
    return `${moment(startDate).format("MMM D")}`;
  } else {
    return "Check-in";
  }
};

const getLabelCheckOut = endDate => {
  if (endDate) {
    return `${moment(endDate).format("MMM D")}`;
  } else {
    return "Check-out";
  }
};

const formatDateLabel = (startDate, endDate) => {
  const formattedStart = moment(startDate).format("MMM D");
  const formattedEnd = moment(endDate).format("MMM D");
  const formattedDayEnd = moment(endDate).format("D");

  if ((startDate, endDate)) {
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${formattedStart} - ${formattedDayEnd}`;
    } else {
      return `${formattedStart} - ${formattedEnd}`;
    }
  } else {
    return "Dates";
  }
};

const monthsNumber = () => {
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  if (window.matchMedia("(min-width: 575px)").matches) return 1;
  return 12;
};

export default class Dates extends React.Component {
  state = {
    from: null,
    to: null
  };

  handleDayClick = (day, { disabled, selected }) => {
    if (disabled) return;
    const range = DateUtils.addDayToRange(day, this.state);

    this.setState(prevState => {
      return range;
    });
    this.onChange(range.from, range.to);
  };

  handleClickOutside = () => {
    this.props.openModal();

    this.resetDates(this.state.from, this.state.to);
  };

  onChange = (from, to) => {
    this.setState({ from, to });
  };

  resetDates = (from, to) => {
    this.setState({ from: null, to: null });
  };

  saveDates = () => {
    this.props.saveDates(this.state.from, this.state.to);

    this.props.openModal();
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <BtnContainer>
        <BtnModal isOpen={this.props.isOpen} onClick={this.props.openModal}>
          {formatDateLabel(this.state.from, this.state.to)}
        </BtnModal>
        {this.props.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>Dates</Text>
                <Reset onClick={this.resetDates}>Reset</Reset>
              </Wrapper>

              <CheckIn>{getLabelCheckIn(this.state.from)}</CheckIn>
              <img src={arrow} alt="arrow" />
              <CheckIn>{getLabelCheckOut(this.state.to)}</CheckIn>

              <WeekdayContainer>
                <WeekDay>Su</WeekDay>
                <WeekDay>Mo</WeekDay>
                <WeekDay>Tu</WeekDay>
                <WeekDay>We</WeekDay>
                <WeekDay>Th</WeekDay>
                <WeekDay>Fr</WeekDay>
                <WeekDay>Sa</WeekDay>
              </WeekdayContainer>
            </HeaderModal>

            <Main>
              <DayPicker
                className="Selectable"
                numberOfMonths={monthsNumber()}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                showWeekDays={false}
                isOutsideRange={true}
                disabledDays={{ before: new Date() }}
              />

              <Footer>
                <BtnCancel onClick={this.handleClickOutside}>Cancel</BtnCancel>
                <BtnApply onClick={this.saveDates}>Apply</BtnApply>
              </Footer>
            </Main>

            <FooterMobile>
              <SaveBtn onClick={this.saveDates}>Save</SaveBtn>
            </FooterMobile>
          </div>
        )}
        {this.props.isOpen && <Overlay onClick={this.handleClickOutside} />}
      </BtnContainer>
    );
  }
}
