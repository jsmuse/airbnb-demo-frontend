import React from 'react';
import styled from 'styled-components';
import Dropdown from './../Dropdown';
import entire from './entire.svg';
import privat from './privat.svg';
import shared from './shared.svg';
import check from './check-on.svg';

const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
  &:nth-child(2) {
    padding: 0 16px;
  }
`;
const TextContainer = styled.label`
  display: flex;
`;
const Label = styled.p`
  margin: 3px 0;
  font-size: 1rem;
  color: #383838;
  font-family: 'CircularLight';
`;
const SubLabel = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 0.85rem;
  color: #383838;
  max-width: 195px;
`;
const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  transition: background 0.1s ease-in-out;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  appearance: none;
  margin-right: 12px;
  &:checked {
    border: none;
    background: url(${check}) no-repeat 50% 50%;
    background-color: #008489;
  }
`;
const Icon = styled.img``;

export default class Dates extends React.Component {
  state = {
    entire: false,
    privat: false,
    shared: false,
    isOpen: false,
    isApply: false,
  };

  onChange = (field) => {
    this.setState(prevState => ({ [field]: !prevState[field] }));
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();
    this.resetRooms();
  };

  resetRooms = () => {
    this.setState({
      entire: false,
      privat: false,
      shared: false,
      isApply: false,
    });
  };

  saveRoom = () => {
    this.props.saveRoom(this.state.entire, this.state.privat, this.state.shared);
    this.openModal();
    this.setState(prevState => ({ isApply: !prevState.isApply }));
  };

  formatRoomLabel = (entireType, privatType, sharedType) => {
    const allTypes = [entireType, privatType, sharedType];
    const trueValue = allTypes.filter(type => type === true);

    if (trueValue.length > 1) return `Room type · ${trueValue.length}`;
    if (entireType) return 'Entire home';
    if (privatType) return 'Private room';
    if (sharedType) return 'Shared room';
    return 'Room type';
  };

  render() {
    return (
      <Dropdown
        btnLabel={this.formatRoomLabel(this.state.entire, this.state.privat, this.state.shared)}
        mobileTitle="Room types"
        handleClickOutside={this.handleClickOutside}
        saveData={this.saveRoom}
        openModal={this.openModal}
        isApply={this.state.isApply}
        isOpen={this.state.isOpen}
        isDisplayBtn="none"
      >
        <RoomContainer>
          <TextContainer for="entire">
            <Checkbox
              type="checkbox"
              id="entire"
              name="entire"
              checked={this.state.entire}
              onChange={() => this.onChange('entire')}
            />
            <div>
              <Label>Entire home</Label>
              <SubLabel>Have a place to yourself</SubLabel>
            </div>
          </TextContainer>
          <Icon src={entire} />
        </RoomContainer>

        <RoomContainer>
          <TextContainer for="privat">
            <Checkbox
              type="checkbox"
              id="privat"
              name="privat"
              checked={this.state.privat}
              onChange={() => this.onChange('privat')}
            />
            <div>
              <Label>Private room</Label>
              <SubLabel>Have your own room and share some common spaces</SubLabel>
            </div>
          </TextContainer>
          <Icon src={privat} />
        </RoomContainer>

        <RoomContainer>
          <TextContainer for="shared">
            <Checkbox
              type="checkbox"
              id="shared"
              name="shared"
              checked={this.state.shared}
              onChange={() => this.onChange('shared')}
            />
            <div>
              <Label>Shared room</Label>
              <SubLabel>Stay in a shared space, like a common room</SubLabel>
            </div>
          </TextContainer>
          <Icon src={shared} />
        </RoomContainer>
      </Dropdown>
    );
  }
}
