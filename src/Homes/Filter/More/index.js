import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import close from './../close.svg';
import entire from './../Room/entire.svg';
import privat from './../Room/privat.svg';
import shared from './../Room/shared.svg';
import Checkbox from './../../../UI/Checkbox';
import Switch from './../../../UI/Switch';
import Histogram from './../../../UI/Histogram';
import Counter from './../../../UI/Counter';

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
    top: 139px;
    left: 0;
    width: 66%;
    height: 85.5%;
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
  display: none;
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
  padding: 16px 0;
  margin: 8px 0;
  align-items: center;
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

const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  margin: 8px 0;
  &:nth-child(2) {
    padding: 0 8px;
  }
`;
const TextContainer = styled.label`
  display: flex;
`;
const Icon = styled.img`
  display: none;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

const formatPriceLabel = (min, max) => {
  if (min > 1 && max < 40) return `$${min} — $${max}`;
  if (max < 40) return `To $${max}`;
  if (min > 1) return `From $${max}`;
  return 'Price';
};
const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class More extends React.Component {
  state = {
    isApply: false,
    price: {
      min: 1,
      max: 40,
    },
    roomType: {
      entire: false,
      privat: false,
      shared: false,
      isOpen: false,
    },
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
      isOpen: false,
    },
    other: {
      superHost: false,
      instantBook: false,
      isOpen: false,
    },
  };

  openModal = () => {
    this.setState(prevState => ({
      other: { ...this.state.other, isOpen: !prevState.isOpen },
    }));
  };

  // handleClickOutside = () => {
  //   this.openModal();
  //   this.resetPrice();
  // };

  // resetPrice = () => {
  //   this.setState({
  //     price: {
  //       min: 1,
  //       max: 40,
  //       isOpen: false,
  //     },
  //     isApply: false,
  //   });
  // };

  // updateValue = (sliderState) => {
  //   this.setState({
  //     price: {
  //       ...this.state.price,
  //       min: sliderState.values[0],
  //       max: sliderState.values[1],
  //     },
  //   });
  // };

  // savePrice = () => {
  //   this.setState({ price: { ...this.state.price, isOpen: false } }, () => {
  //     this.props.save('price', this.state.price);
  //   });

  //   this.setState(prevState => ({ isApply: !prevState.isApply }));
  // };

  render() {
    return (
      <BtnContainer>
        <BtnModal
          isApply={this.state.isApply}
          isOpen={this.state.other.isOpen}
          onClick={this.openModal}
        >
          More filters
        </BtnModal>
        {this.state.other.isOpen && (
          <Main>
            <Grid>
              <Row>
                <Col md={1} />
                <Col xs={12} md={11}>
                  <HeaderModal>
                    <Wrapper>
                      <Close onClick={this.handleClickOutside} />
                      <Text>All filters (0)</Text>
                      <Reset onClick={this.resetGuests}>Reset</Reset>
                    </Wrapper>
                  </HeaderModal>
                  <Title>Room type</Title>
                  <RoomContainer>
                    <TextContainer for="entire">
                      <Checkbox
                        id="entire"
                        name="entire"
                        checked={this.state.roomType.entire}
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
                        id="privat"
                        name="privat"
                        checked={this.state.roomType.privat}
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
                        id="shared"
                        name="shared"
                        checked={this.state.roomType.shared}
                        onChange={() => this.onChange('shared')}
                      />
                      <div>
                        <Label>Shared room</Label>
                        <SubLabel>Stay in a shared space, like a common room</SubLabel>
                      </div>
                    </TextContainer>
                    <Icon src={shared} />
                  </RoomContainer>
                  <Divider />
                  <Title>Price range</Title>
                  <Label>{formatPriceTitle(this.state.price.min, this.state.price.max)}</Label>
                  <SubLabel>The average nightly price is $75.</SubLabel>
                  <Histogram
                    updateValue={this.updateValue}
                    min={this.state.price.min}
                    max={this.state.price.max}
                  />
                  <Divider />
                  <Title>Rooms and beds</Title>
                  <CounterContainer>
                    <div>
                      <Label>Adults</Label>
                    </div>
                    <Counter
                      minusCounter={this.minusCounter}
                      value={this.state.guests.adults}
                      field="adults"
                      minLimit={1}
                      plusCounter={this.plusCounter}
                      maxLimit={16}
                      label={this.state.guests.adults}
                    />
                  </CounterContainer>
                  <CounterContainer>
                    <div>
                      <Label>Children</Label>
                      <SubLabel>Ages 2 — 12</SubLabel>
                    </div>
                    <Counter
                      minusCounter={this.minusCounter}
                      value={this.state.guests.childrens}
                      field="childrens"
                      minLimit={0}
                      plusCounter={this.plusCounter}
                      maxLimit={5}
                      label={this.state.guests.childrens}
                    />
                  </CounterContainer>
                  <CounterContainer>
                    <div>
                      <Label>Infants</Label>
                      <SubLabel>Under 2</SubLabel>
                    </div>
                    <Counter
                      minusCounter={this.minusCounter}
                      value={this.state.guests.infants}
                      field="infants"
                      minLimit={0}
                      plusCounter={this.plusCounter}
                      maxLimit={5}
                      label={this.state.guests.infants}
                    />
                  </CounterContainer>
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
                      checked={this.state.other.instantBook}
                      onChange={this.props.onChange}
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
                      checked={this.state.other.superHost}
                      onChange={this.props.onChange}
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
                        this.props.saveData(this.props.field, this.props.value);
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
        {this.props.isOpen && (
          <Overlay
            onClick={() => {
              this.props.handleClickOutside(this.props.field);
            }}
          />
        )}
      </BtnContainer>
    );
  }
}
