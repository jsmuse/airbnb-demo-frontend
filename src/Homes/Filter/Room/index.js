import React from 'react';
import styled from 'styled-components';
import entire from './entire.svg';
import privat from './privat.svg';
import shared from './shared.svg';
import Checkbox from './../../../UI/Checkbox';

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

const Icon = styled.img``;

export default props => (
  <div>
    <RoomContainer>
      <TextContainer for="entire">
        <Checkbox
          id="entire"
          name="entire"
          checked={props.roomType.entire}
          onChange={() => props.onChangeRoom('entire')}
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
          id="privat"
          name="privat"
          checked={props.roomType.privat}
          onChange={() => props.onChangeRoom('privat')}
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
          id="shared"
          name="shared"
          checked={props.roomType.shared}
          onChange={() => props.onChangeRoom('shared')}
        />
        <div>
          <Label>Shared room</Label>
          <SubLabel>Stay in a shared space, like a common room</SubLabel>
        </div>
      </TextContainer>
      <Icon src={shared} />
    </RoomContainer>
  </div>
);
