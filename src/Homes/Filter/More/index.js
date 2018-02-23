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
    height: 80%;
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
  @media (min-width: 768px) {
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
`;

const Footer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 20;
    width: 100%;
    height: 64px;
  }
  @media (min-width: 992px) {
    width: 66%;
    justify-content: flex-end;
  }
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
  @media (min-width: 992px) {
    margin-right: 16px;
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
  width: 99%;
  margin: 32px 0.5%;
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
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

const SeeAllMd = styled.button`
  display: none;
  @media (min-width: 992px) {
    display: block;
    font-size: 0.9rem;
    border: none;
    background: #fff;
    background: url(/static/media/arrow.6a783de8.svg) no-repeat 80% 50%;
    padding: 0 52px 0 0;
    color: #0f7276;
    cursor: pointer;
    margin-top: 16px;
  }
`;

const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  margin: 8px 0;
`;
const TextContainer = styled.label`
  display: flex;
`;
const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin: 6px 0;
`;
const Icon = styled.img`
  display: none;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const HideBlock = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 50%;
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

const HideContainer = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class More extends React.Component {
  state = {
    isApply: false,
    isOpen: false,
    isAmenities: false,
    isFacilities: false,
    price: {
      min: 1,
      max: 40,
    },
    roomType: {
      entire: false,
      privat: false,
      shared: false,
    },
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
    },
    instantBook: {
      book: false,
    },
    other: {
      bathrooms: 0,
      beds: 0,
      bedrooms: 0,
      superhost: false,
      heating: false,
      tv: false,
      kitchen: false,
      wifi: false,
      elebator: false,
      pool: false,
      parking: false,
      wheelchair: false,
    },
  };

  updateValue = (sliderState) => {
    this.setState({
      price: {
        ...this.state.price,
        min: sliderState.values[0],
        max: sliderState.values[1],
      },
    });
  };

  openModal = () => {
    if (this.props.openedFilter) {
      this.props.handleOpen(this.props.id);

      if (!this.state.isOpen) {
        this.setState({ isOpen: true }, () => {
          this.props.handleOpen(this.props.id);
        });
      }
    } else {
      if (!this.state.isOpen) {
        this.setState({ isOpen: true }, () => {
          this.props.handleOpen(this.props.id);
        });
      }
      if (this.state.isOpen) {
        this.setState({ isOpen: false }, () => {
          this.props.handleOpen(null);
        });
      }
    }
  };

  toggleCheckbox = (field, obj) => {
    if (this.state[obj][field]) {
      this.setState({
        [obj]: { ...this.state[obj], [field]: false },
      });
    } else {
      this.setState({
        [obj]: { ...this.state[obj], [field]: true },
      });
    }
  };

  plusCounter = (field, value, maxLimit) => {
    if (value < maxLimit) {
      this.setState({
        other: { ...this.state.other, [field]: value + 1 },
      });
    }
  };

  minusCounter = (field, value, minLimit) => {
    if (value > minLimit) {
      this.setState({
        other: { ...this.state.other, [field]: value - 1 },
      });
    }
  };

  handleClickOutside = () => {
    this.openModal();
    this.reset();
  };

  save = () => {
    this.setState({ isOpen: false }, () => {
      const result = this.state;
      this.props.save(result);
    });

    this.setState({ isApply: true, isOpen: false });
  };

  showAll = (type) => {
    this.setState({ [type]: true });
  };

  reset = () => {
    this.setState({
      isApply: false,
      isOpen: false,
      isAmenities: false,
      isFacilities: false,
      price: {
        min: 1,
        max: 40,
      },
      roomType: {
        entire: false,
        privat: false,
        shared: false,
      },
      guests: {
        adults: 1,
        childrens: 0,
        infants: 0,
      },
      instantBook: {
        book: false,
      },
      other: {
        bathrooms: 0,
        beds: 0,
        bedrooms: 0,
        superhost: false,
        heating: false,
        tv: false,
        kitchen: false,
        wifi: false,
        elebator: false,
        pool: false,
        parking: false,
        wheelchair: false,
      },
    });
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal isApply={this.state.isApply} isOpen={this.state.isOpen} onClick={this.openModal}>
          More filters
        </BtnModal>
        {this.state.isOpen &&
          this.props.openedFilter === this.props.id && (
            <Main>
              <Grid>
                <Row>
                  <Col md={1} />
                  <Col xs={12} md={10}>
                    <HeaderModal>
                      <Wrapper>
                        <Close onClick={this.handleClickOutside} />
                        <Text>All filters (0)</Text>
                        <Reset onClick={this.reset}>Reset</Reset>
                      </Wrapper>
                    </HeaderModal>
                    <HideContainer>
                      <Title>Room type</Title>
                      <RoomContainer>
                        <TextContainer for="entire">
                          <Checkbox
                            id="entire"
                            checked={this.state.roomType.entire}
                            onChange={() => this.toggleCheckbox('entire', 'roomType')}
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
                            checked={this.state.roomType.privat}
                            onChange={() => this.toggleCheckbox('privat', 'roomType')}
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
                            checked={this.state.roomType.shared}
                            onChange={() => this.toggleCheckbox('shared', 'roomType')}
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
                    </HideContainer>

                    <Title>Rooms and beds</Title>
                    <CounterContainer>
                      <div>
                        <Label>Bedrooms</Label>
                      </div>
                      <Counter
                        minusCounter={this.minusCounter}
                        value={this.state.other.bedrooms}
                        field="bedrooms"
                        minLimit={0}
                        plusCounter={this.plusCounter}
                        maxLimit={16}
                        label={this.state.other.bedrooms}
                      />
                    </CounterContainer>
                    <CounterContainer>
                      <div>
                        <Label>Beds</Label>
                      </div>
                      <Counter
                        minusCounter={this.minusCounter}
                        value={this.state.other.beds}
                        field="beds"
                        minLimit={0}
                        plusCounter={this.plusCounter}
                        maxLimit={5}
                        label={this.state.other.beds}
                      />
                    </CounterContainer>
                    <CounterContainer>
                      <div>
                        <Label>Bathrooms</Label>
                      </div>
                      <Counter
                        minusCounter={this.minusCounter}
                        value={this.state.other.bathrooms}
                        field="bathrooms"
                        minLimit={0}
                        plusCounter={this.plusCounter}
                        maxLimit={5}
                        label={this.state.other.bathrooms}
                      />
                    </CounterContainer>
                    <Divider />
                    <Title>More options</Title>
                    <BookContainer>
                      <div>
                        <Label>Instant Book</Label>
                        <SubLabel>
                          Listings you can book without waiting for host approval.
                        </SubLabel>
                        <LearnMore>Learn more</LearnMore>
                      </div>
                      <Switch
                        id="book"
                        checked={this.state.instantBook.book}
                        onChange={() => {
                          this.toggleCheckbox('book', 'instantBook');
                        }}
                      />
                    </BookContainer>
                    <BookContainer>
                      <div>
                        <Label>Superhost</Label>
                        <SubLabel>Stay with recognized hosts.</SubLabel>
                        <LearnMore>Learn more</LearnMore>
                      </div>
                      <Switch
                        id="superhost"
                        checked={this.state.other.superhost}
                        onChange={() => {
                          this.toggleCheckbox('superhost', 'other');
                        }}
                      />
                    </BookContainer>
                    <Divider />
                    <ContainerOther>
                      <Title>Amenities</Title>
                      <SeeAllSm onClick={() => this.showAll('isAmenities')}>See all</SeeAllSm>
                    </ContainerOther>

                    {this.state.isAmenities && (
                      <HideBlock>
                        <Column>
                          <LabelCheckbox for="heating">
                            <Checkbox
                              id="heating"
                              checked={this.state.other.heating}
                              onChange={() => this.toggleCheckbox('heating', 'other')}
                            />
                            <Label>Heating</Label>
                          </LabelCheckbox>

                          <LabelCheckbox for="tv">
                            <Checkbox
                              id="tv"
                              checked={this.state.other.tv}
                              onChange={() => this.toggleCheckbox('tv', 'other')}
                            />
                            <Label>TV</Label>
                          </LabelCheckbox>
                          <SeeAllMd>See all facilities</SeeAllMd>
                        </Column>

                        <Column>
                          <LabelCheckbox for="kitchen">
                            <Checkbox
                              id="kitchen"
                              checked={this.state.other.kitchen}
                              onChange={() => this.toggleCheckbox('kitchen', 'other')}
                            />
                            <Label>Kitchen</Label>
                          </LabelCheckbox>

                          <LabelCheckbox for="wifi">
                            <Checkbox
                              id="wifi"
                              checked={this.state.other.wifi}
                              onChange={() => this.toggleCheckbox('wifi', 'other')}
                            />
                            <Label>Wireless Internet</Label>
                          </LabelCheckbox>
                        </Column>
                      </HideBlock>
                    )}

                    <Divider />
                    <ContainerOther>
                      <Title>Facilities</Title>
                      <SeeAllSm onClick={() => this.showAll('isFacilities')}>See all</SeeAllSm>
                    </ContainerOther>
                    {this.state.isFacilities && (
                      <HideBlock>
                        <Column>
                          <LabelCheckbox for="elebator">
                            <Checkbox
                              id="elebator"
                              checked={this.state.other.elebator}
                              onChange={() => this.toggleCheckbox('elebator', 'other')}
                            />
                            <Label>Elebator</Label>
                          </LabelCheckbox>

                          <LabelCheckbox for="pool">
                            <Checkbox
                              id="pool"
                              checked={this.state.other.pool}
                              onChange={() => this.toggleCheckbox('pool', 'other')}
                            />
                            <Label>Pool</Label>
                          </LabelCheckbox>
                          <SeeAllMd>See all facilities</SeeAllMd>
                        </Column>

                        <Column>
                          <LabelCheckbox for="parking">
                            <Checkbox
                              id="parking"
                              checked={this.state.other.parking}
                              onChange={() => this.toggleCheckbox('parking', 'other')}
                            />
                            <Label>Free parking on premises</Label>
                          </LabelCheckbox>

                          <LabelCheckbox for="wheelchair">
                            <Checkbox
                              id="wheelchair"
                              checked={this.state.other.wheelchair}
                              onChange={() => this.toggleCheckbox('wheelchair', 'other')}
                            />
                            <Label>Wheelchair accessible</Label>
                          </LabelCheckbox>
                        </Column>
                      </HideBlock>
                    )}
                    <Divider />

                    <Footer>
                      <BtnCancel onClick={this.reset}>Cancel</BtnCancel>
                      <SeeHomes onClick={this.save}>See homes</SeeHomes>
                    </Footer>
                    <FooterMobile>
                      <SaveBtn onClick={this.save}>See homes</SaveBtn>
                    </FooterMobile>
                  </Col>
                  <Col md={1} />
                </Row>
              </Grid>
            </Main>
          )}
        {this.state.isOpen &&
          this.props.openedFilter === this.props.id && (
            <Overlay
              onClick={() => {
                this.handleClickOutside(this.field);
              }}
            />
          )}
      </BtnContainer>
    );
  }
}
