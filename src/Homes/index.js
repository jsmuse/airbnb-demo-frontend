import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter/';
import GoogleMap from './GoogleMap';
import Card from './Card';
import Pagination from './Pagination';
import location from './location.svg';

const Container = styled.div`
  margin-top: 160px;
`;

const MapContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    width: 34%;
    position: fixed;
    top: 140px;
    right: 0;
    z-index: 0;
    height: calc(100% - 8.9rem);
    display: inline-block;
  }
`;

const TotalText = styled.p`
  font-size: 1rem;
  color: #383838;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #636363;
  margin-top: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 24px 24px 0;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const IconLocation = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default class Homes extends React.Component {
  state = {
    homes: [],
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://airbnb-demo-api.now.sh/v1/homes')
      .then(res => res.json(), err => err.message)
      .then((data) => {
        this.setState({ homes: data.items });
      });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Homes</title>
        </Helmet>

        <Filter />
        <Grid>
          <Row>
            <Col xs={12} lg={8}>
              <Container>
                <Row>
                  {this.state.homes.map(home => (
                    <Col xs={12} sm={6}>
                      <Card
                        picSrc={home.images[0].picture}
                        price={home.price}
                        title={home.name}
                        rentType={home.kind}
                        bedsCount={home.bedsCount}
                        reviewsCount={home.reviewsCount}
                        houseGrade={home.isSuperhost && '· Superhost'}
                      />
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col xs={12}>
                    <Pagination />
                    <TotalText>1 – 18 of 300+ Rentals</TotalText>
                    <Row>
                      <Col xs={12} sm={10} md={12}>
                        <Text>
                          Enter dates to see full pricing. Additional fees apply. Taxes may be
                          added.
                        </Text>
                      </Col>
                      <Col xs={12} sm={2}>
                        <IconContainer>
                          <IconLocation>
                            <img src={location} alt="location" />
                          </IconLocation>
                        </IconContainer>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>

            <MapContainer>
              <GoogleMap />
            </MapContainer>
          </Row>
        </Grid>
      </div>
    );
  }
}
