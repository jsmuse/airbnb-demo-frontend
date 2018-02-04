import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrow from '../../Homes/Shape.svg';
import Card from '../../Homes/Card';
import BtnNext from '../BtnNext';
import HorizontalScroll from '../HorizontalScroll';
import Title from '../Title';

const Container = styled.div`
  position: relative;
`;

const UpdatedCard = styled(Card)`
  margin-bottom: 0;
`;

const BtnAll = styled(Link)`
  text-decoration: none;
  background: none;
  border: none;
  color: #383838;
  line-height: 24px;
  font-size: 0.875rem;
`;

const Arrow = styled.img`
  transform: rotate(-90deg);
  margin-bottom: 2px;
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
        <Grid>
          <Row end="xs" middle="xs">
            <Col xs>
              <Title>Homes</Title>
            </Col>
            <Col xs>
              <BtnAll to="/homes">
                See all <Arrow src={arrow} alt="Arrow" />
              </BtnAll>
            </Col>
          </Row>
          <Container>
            <Row>
              <HorizontalScroll>
                {this.state.homes.map(home => (
                  <Col xs={6} sm={5} md={4}>
                    <UpdatedCard
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
                <BtnNext />
              </HorizontalScroll>
            </Row>
          </Container>
        </Grid>
      </div>
    );
  }
}
