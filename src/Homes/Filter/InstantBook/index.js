import React from 'react';
import styled from 'styled-components';
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

export default props => (
  <BookContainer>
    <div>
      <Label>Instant Book</Label>
      <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
    </div>
    <Switch
      id="book"
      checked={props.instantBook.book}
      isApply={props.instantBook.isApply}
      onChange={props.onChange}
    />
  </BookContainer>
);
