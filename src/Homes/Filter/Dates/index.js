import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './dayPicker.css';
import Dropdown from './../Dropdown';
import close from './../close.svg';
import arrow from '../../arrow-calendar.svg';

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
  font-family: 'CircularLight', sans-serif;
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

const getLabelCheckIn = startDate =>
  (startDate ? `${moment(startDate).format('MMM D')}` : 'Check-in');

const getLabelCheckOut = endDate => (endDate ? `${moment(endDate).format('MMM D')}` : 'Check-out');

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

const monthsNumber = () => {
  if (window.matchMedia('(min-width: 768px)').matches) return 2;
  if (window.matchMedia('(min-width: 575px)').matches) return 1;
  return 12;
};

export default class Dates extends React.Component {
  state = {
    dates: {
      from: null,
      to: null,
      isOpen: false,
    },
    isApply: false,
  };

  onChange = (from, to) => {
    this.setState({ dates: { ...this.state.dates, from, to } });
  };

  openModal = () => {
    this.setState(prevState => ({
      dates: { ...this.state.dates, isOpen: !prevState.isOpen },
    }));
  };

  handleClickOutside = () => {
    this.openModal();
    this.resetDates();
  };

  handleDayClick = (day, { disabled }) => {
    if (disabled) return;
    const range = DateUtils.addDayToRange(day, this.state.dates);

    this.setState(() => range);
    this.onChange(range.from, range.to);
  };

  resetDates = () => {
    this.setState({
      dates: {
        ...this.state.dates,
        from: null,
        to: null,
        isOpen: false,
      },
      isApply: false,
    });
  };

  saveDates = () => {
    this.setState({ dates: { ...this.state.dates, isOpen: false } }, () => {
      this.props.save('dates', this.state.dates);
    });

    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Dropdown
        btnLabel={formatDateLabel(this.state.dates.from, this.state.dates.to)}
        mobileTitle="Dates"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveDates}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.dates.isOpen}
        isDisplayBtn="inline-block"
        widthModal="720px"
        widthTabletModal="360px"
      >
        <HeaderModal>
          <Wrapper>
            <Close onClick={this.handleClickOutside} />
            <Text>Dates</Text>
            <Reset onClick={this.resetDates}>Reset</Reset>
          </Wrapper>

          <CheckIn>{getLabelCheckIn(this.state.dates.from)}</CheckIn>
          <img src={arrow} alt="arrow" />
          <CheckIn>{getLabelCheckOut(this.state.dates.to)}</CheckIn>

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

        <DayPicker
          className="Selectable"
          numberOfMonths={monthsNumber()}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          showWeekDays={false}
          isOutsideRange
          disabledDays={{ before: new Date() }}
        />
      </Dropdown>
    );
  }
}
