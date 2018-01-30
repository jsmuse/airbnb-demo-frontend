import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import close from './../close.svg';
import Room from './../Room';
import Price from './../Price';
import Guests from './../Guests';
import Switch from './../../../UI/Switch';

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 16px;
  font-size: 0.875rem;
  margin: 12px 11px 12px 0;
  cursor: pointer;
  color: ${props => (props.isOpen || props.isApply ? '#fff' : '#383838')};
  background: ${props => (props.isOpen || props.isApply ? '#008489' : 'transparent')};
  display: ${props => props.isDisplayBtn};
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: block;
    position: fixed;
    top: 140px;
    left: 0;
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
  background: #fff;
  width: 100%;
  padding: 90px 8px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    position: fixed;
    top: 141px;
    left: 0;
    width: 66%;
    height: 100%;
    width: ${props => props.widthTabletModal};
    padding: 0;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  }
`;

const FooterMobile = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 97%;
  z-index: 102;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-shadow: 0px -1px 0px #d5d5d5;
  @media (min-width: 992px) {
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
displa
`;

const BtnCancel = styled.button`
  display: inline-block;
  padding: 12px 28px;
  font-size: 1.125rem;
  color: #383838;
  background: none;
  border: none;
`;

const SeeHomes = styled.button`
  display: inline-block;
  padding: 12px 28px;
  color: #ffffff;
  font-size: 1.125rem;
  background: #008489;
  border-radius: 4px;
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
  margin: 0 0 14px;
  color: #383838;
  font-size: 0.875rem;
`;
const Reset = styled.button`
  margin: 0 0 14px;
  font-size: 0.875rem;
  border: none;
  background: none;
  color: #0f7276;
`;

const HeaderModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  z-index: 100;
  @media (min-width: 992px) {
    display: none;
  }
`;
const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
`;

const Label = styled.p`
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  color: #383838;
  font-family: 'CircularLight';
`;
const SubLabel = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 0.9rem;
  color: #383838;
  max-width: 195px;
`;
const LearnMore = styled.p`
  color: #0f7276;
  font-size: 0.9rem;
  font-family: 'CircularLight';
  margin: 6px 0;
`;

const Title = styled.p`
  color: #383838;
  font-size: 1.125rem;
  margin-left: 8px;
  display: inline-block;
`;
const ContainerOther = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Divider = styled.div`
  width: 96%;
  margin: 32px 2%;
  height: 1px;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;
const SeeAllSm = styled.button`
  font-size: 0.9rem;
  border: none;
  background: #fff;
  background: url(/static/media/arrow.6a783de8.svg) no-repeat 80% 50%;
  padding-right: 32px;
  color: #0f7276;
  margin-left: 8px;
  cursor: pointer;
`;

export default props => (
  <BtnContainer>
    <BtnModal
      isDisplayBtn={props.isDisplayBtn}
      isApply={props.isApply}
      isOpen={props.isOpen}
      onClick={() => {
        props.openModal(props.field);
      }}
    >
      {props.btnLabel}
    </BtnModal>
    {props.isOpen && (
      <Main>
        <Grid>
          <Row>
            <Col xs={1} />
            <Col xs={11}>
              <HeaderModal>
                <Wrapper>
                  <Close onClick={props.handleClickOutside} />
                  <Text>{props.mobileTitle}</Text>
                  <Reset onClick={props.resetGuests}>Reset</Reset>
                </Wrapper>
              </HeaderModal>
              <Title>Room type</Title>
              <Room roomType={props.roomType} onChangeRoom={props.onChangeRoom} />

              <Divider />
              <Title>Price range</Title>
              <Price
                price={props.price}
                formatPriceTitle={props.formatPriceTitle}
                updateValue={props.updateValue}
              />

              <Divider />
              <Title>Rooms and beds</Title>
              <Guests
                guests={props.guests}
                plusCounter={props.plusCounter}
                minusCounter={props.minusCounter}
              />

              <Divider />
              <Title>More options</Title>
              <BookContainer>
                <div>
                  <Label>Instant Book</Label>
                  <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
                  <LearnMore>Learn more</LearnMore>
                </div>
                <Switch
                  id="book"
                  checked={props.instantBook.book}
                  isApply={props.instantBook.isApply}
                  onChange={props.onChange}
                />
              </BookContainer>
              <BookContainer>
                <div>
                  <Label>Superhost</Label>
                  <SubLabel>Stay with recognized hosts.</SubLabel>
                  <LearnMore>Learn more</LearnMore>
                </div>
                <Switch
                  id="book2"
                  checked={props.instantBook.book}
                  isApply={props.instantBook.isApply}
                  onChange={props.onChange}
                />
              </BookContainer>

              <Divider />
              <ContainerOther>
                <Title>Amenities</Title>
                <SeeAllSm>See all</SeeAllSm>
              </ContainerOther>
              <Divider />
              <ContainerOther>
                <Title>Facilities</Title>
                <SeeAllSm>See all</SeeAllSm>
              </ContainerOther>

              <Footer>
                <SeeHomes>See homes</SeeHomes>
                <BtnCancel>Cancel</BtnCancel>
              </Footer>
              <FooterMobile>
                <SaveBtn
                  onClick={() => {
                    props.saveData(props.field, props.value);
                  }}
                >
                  See homes
                </SaveBtn>
              </FooterMobile>
            </Col>
          </Row>
        </Grid>
      </Main>
    )}
    {props.isOpen && (
      <Overlay
        onClick={() => {
          props.handleClickOutside(props.field);
        }}
      />
    )}
  </BtnContainer>
);
