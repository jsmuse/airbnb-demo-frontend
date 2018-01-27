import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import Checkbox from './../../../UI/Checkbox';
import './../Price/rheostat.css';
import close from './../close.svg';
import entire from './../Room/entire.svg';
import privat from './../Room/privat.svg';
import shared from './../Room/shared.svg';
import Minus from './../Guests/MinusBtn';
import Plus from './../Guests/PlusBtn';
import Switch from './../../../UI/Switch';

const Icon = styled.img``;
const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin: 8px 0;
  &:nth-child(2) {
    padding: 0;
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
  cursor: pointer;
  color: ${props => (props.isOpen || props.isApply ? '#fff' : '#383838')};
  background: ${props => (props.isOpen || props.isApply ? '#008489' : 'transparent')};
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
  padding: 60px 0 70px;
  box-sizing: border-box;
  @media (min-width: 575px) {
    position: absolute;
    top: 53px;
    left: 0;
    height: auto;
    width: 326px;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
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

const Title = styled.p`
  color: #383838;
  font-size: 1.125rem;
  margin: 20px 0;
`;
const Divider = styled.div`
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  height: 1px;
  width: 90%;
  margin-left: 5%;
`;

const LabelPrice = styled.p`
  font-family: 'CircularLight';
  margin: 0 0 6px 0;
  font-size: 1rem;
  color: #383838;
`;
const SubLabelPrice = styled.p`
  margin: 0;
  font-family: 'CircularLight';
  font-size: 0.75rem;
  color: #383838;
  max-width: 195px;
`;
const HistogramContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 5%;
  height: 40px;
  margin-top: 120px;
`;
const HistogramLineContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 32px;
  align-items: flex-end;
`;
const HistogramLine = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  left: ${props => `${props.length}px`};
  width: 6px;
  height: ${props => `${props.height}px`};
  background: #d8d8d8;
`;
const MainContainer = styled.div`
  padding: 16px;
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 114px;
`;
const CountedLabel = styled.p`
  margin: 4px 0;
  font-family: 'CircularLight';
  font-size: 1.125rem;
  color: #383838;
`;
const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 8px 0;
`;
const LinkMore = styled.a`
  font-size: 0.9rem;
  color: #0f7276;
  font-family: 'CircularLight';
  text-decoration: none;
`;

const HistogramLines = props => (
  <React.Fragment>
    {props.height.map(value => <HistogramLine length={props.height.length} height={value} />)}
  </React.Fragment>
);

const formatPriceTitle = (min, max) => `$${min} — $${max}${max >= 40 ? '+' : ''}`;

export default class Price extends React.Component {
  state = {
    dates: this.props.dates,
    guests: this.props.guests,
    roomType: this.props.roomType,
    price: this.props.price,
    isOpen: false,
    roomsBeds: 0,
  };

  onChange = (field) => {
    console.log(this.state);
    this.setState(prevState => ({
      roomType: { ...this.state.roomType, [field]: !prevState[field] },
    }));
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = () => {
    this.openModal();
  };

  saveData = () => {
    this.props.saveData();
  };

  render() {
    const arrayPrices = [
      13,
      20,
      10,
      35,
      30,
      25,
      20,
      40,
      45,
      50,
      60,
      68,
      75,
      80,
      76,
      69,
      57,
      50,
      48,
      40,
      33,
      20,
    ];
    return (
      <BtnContainer>
        <BtnModal isApply={this.state.isApply} isOpen={this.state.isOpen} onClick={this.openModal}>
          More filters
        </BtnModal>
        {this.state.isOpen && (
          <div>
            <HeaderModal>
              <Wrapper>
                <Close onClick={this.handleClickOutside} />
                <Text>All filters (0)</Text>
                <Reset onClick={this.resetPrice}>Reset</Reset>
              </Wrapper>
            </HeaderModal>
            <Main>
              <MainContainer>
                <Title>Room type</Title>
                <RoomContainer>
                  <TextContainer for="entire">
                    <Checkbox
                      id="entire"
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
              </MainContainer>
              <Divider />

              <MainContainer>
                <Title>Price range</Title>
                <LabelPrice>
                  {formatPriceTitle(this.state.price.min, this.state.price.max)}
                </LabelPrice>
                <SubLabelPrice>The average nightly price is $75.</SubLabelPrice>
                <HistogramContainer>
                  <HistogramLineContainer>
                    <HistogramLines height={arrayPrices} length={arrayPrices.length} />
                  </HistogramLineContainer>
                  <Rheostat
                    min={1}
                    max={40}
                    step="1"
                    onValuesUpdated={this.updateValue}
                    values={[1, 40]}
                  />
                </HistogramContainer>
              </MainContainer>
              <Divider />

              <MainContainer>
                <CounterContainer>
                  <div>
                    <Label>Bedrooms</Label>
                  </div>
                  <Counter>
                    <Minus
                      minusCounter={this.minusCounter}
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      minLimit={0}
                    />
                    <CountedLabel>{this.state.roomsBeds}+</CountedLabel>
                    <Plus
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      plusCounter={this.plusCounter}
                      maxLimit={5}
                    />
                  </Counter>
                </CounterContainer>
                <CounterContainer>
                  <div>
                    <Label>Beds</Label>
                  </div>
                  <Counter>
                    <Minus
                      minusCounter={this.minusCounter}
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      minLimit={0}
                    />
                    <CountedLabel>{this.state.roomsBeds}+</CountedLabel>
                    <Plus
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      plusCounter={this.plusCounter}
                      maxLimit={5}
                    />
                  </Counter>
                </CounterContainer>
                <CounterContainer>
                  <div>
                    <Label>Bedrooms</Label>
                  </div>
                  <Counter>
                    <Minus
                      minusCounter={this.minusCounter}
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      minLimit={0}
                    />
                    <CountedLabel>{this.state.roomsBeds}+</CountedLabel>
                    <Plus
                      value={this.state.roomsBeds}
                      field="roomsBeds"
                      plusCounter={this.plusCounter}
                      maxLimit={5}
                    />
                  </Counter>
                </CounterContainer>
              </MainContainer>
              <Divider />

              <MainContainer>
                <Title>More options</Title>
                <BookContainer>
                  <div>
                    <Label>Instant Book</Label>
                    <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
                    <LinkMore href="#">Learn more</LinkMore>
                  </div>
                  <Switch
                    id="book"
                    checked={this.props.instantBook.book}
                    onChange={this.onChange}
                  />
                </BookContainer>
                <BookContainer>
                  <div>
                    <Label>Instant Book</Label>
                    <SubLabel>Listings you can book without waiting for host approval.</SubLabel>
                    <LinkMore href="#">Learn more</LinkMore>
                  </div>
                  <Switch
                    id="book2"
                    checked={this.props.instantBook.book}
                    onChange={this.onChange}
                  />
                </BookContainer>
              </MainContainer>
              <Divider />

              <MainContainer>
                <Title>Amenities</Title>
                <TextContainer for="Heating">
                  <Checkbox
                    id="Heating"
                    checked={this.state.roomType.entire}
                    onChange={() => this.onChange('entire')}
                  />
                  <div>
                    <Label>Heating</Label>
                  </div>
                </TextContainer>
                <TextContainer for="Heating">
                  <Checkbox
                    id="Heating"
                    checked={this.state.roomType.entire}
                    onChange={() => this.onChange('entire')}
                  />
                  <div>
                    <Label>TV</Label>
                  </div>
                </TextContainer>

                <TextContainer for="TV">
                  <Checkbox
                    id="TV"
                    checked={this.state.roomType.entire}
                    onChange={() => this.onChange('entire')}
                  />
                  <div>
                    <Label>TV</Label>
                  </div>
                </TextContainer>

                <TextContainer for="Kitchen">
                  <Checkbox
                    id="Kitchen"
                    checked={this.state.roomType.entire}
                    onChange={() => this.onChange('entire')}
                  />
                  <div>
                    <Label>Kitchen</Label>
                  </div>
                </TextContainer>
                <TextContainer for="Internet">
                  <Checkbox
                    id="Internet"
                    checked={this.state.roomType.entire}
                    onChange={() => this.onChange('entire')}
                  />
                  <div>
                    <Label>Wireless Internet</Label>
                  </div>
                </TextContainer>
              </MainContainer>
              <Footer>
                <BtnCancel onClick={this.handleClickOutside}>Cancel</BtnCancel>
                <BtnApply onClick={this.saveData}>Apply</BtnApply>
              </Footer>
            </Main>
            <FooterMobile>
              <SaveBtn onClick={this.saveData}>Save</SaveBtn>
            </FooterMobile>
          </div>
        )}
      </BtnContainer>
    );
  }
}
