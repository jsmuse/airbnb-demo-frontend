import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Filter from "./Filter/";
import GoogleMap from "./GoogleMap";
import Card from "./Card";
import Pagination from "./Pagination";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import image2 from "./Rectangle2.png";
import image22x from "./Rectangle2@2x.png";
import image3 from "./Rectangle3.png";
import image32x from "./Rectangle3@2x.png";
import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";
import image5 from "./Rectangle5.png";
import image52x from "./Rectangle5@2x.png";
import image6 from "./Rectangle6.png";
import image62x from "./Rectangle6@2x.png";
import location from "./location.svg";
import { Helmet } from "react-helmet";

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

export default () => {
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
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image}
                    picSrc2x={image2x}
                    price={82}
                    title="La Salentina, see, nature & relax"
                    rentType="Entire house"
                    bedsCount={9}
                    reviewsCount={97}
                    houseGrade="Superhost"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image2}
                    picSrc2x={image22x}
                    price={82}
                    title="Your private 3 bedr. riad and exclusi…"
                    rentType="Entire house"
                    bedsCount={5}
                    reviewsCount={161}
                    houseGrade="Superhost"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image3}
                    picSrc2x={image32x}
                    price={200}
                    title="Dreamy Tropical Tree House"
                    rentType="Entire house"
                    bedsCount={1}
                    reviewsCount={364}
                    houseGrade="Superhost"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image4}
                    picSrc2x={image42x}
                    price={110}
                    title="Best location old town luxury loft"
                    rentType="Entire house"
                    bedsCount={1}
                    reviewsCount={369}
                    houseGrade="Superhost"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image5}
                    picSrc2x={image52x}
                    price={83}
                    title="Lussuoso. Vista incantevole."
                    rentType="Entire house"
                    bedsCount={6}
                    reviewsCount={105}
                    houseGrade="Superhost"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    picSrc={image6}
                    picSrc2x={image62x}
                    price={200}
                    title="In the historical center of Lecce"
                    rentType="Entire house"
                    bedsCount={3}
                    reviewsCount={221}
                    houseGrade="Superhost"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Pagination />
                  <TotalText>1 – 18 of 300+ Rentals</TotalText>
                  <Row>
                    <Col xs={12} sm={10} md={12}>
                      <Text>
                        Enter dates to see full pricing. Additional fees apply.
                        Taxes may be added.
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
};
