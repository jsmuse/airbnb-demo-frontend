import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "../../Homes/Shape.svg";
import Card from "../../Homes/Card";
import BtnNext from "../BtnNext";
import HorizontalScroll from "../HorizontalScroll";
import Title from "../Title";
import image from "../../Homes/Rectangle.png";
import image2x from "../../Homes/Rectangle@2x.png";
import image2 from "../../Homes/Rectangle2.png";
import image22x from "../../Homes/Rectangle2@2x.png";
import image3 from "../../Homes/Rectangle3.png";
import image32x from "../../Homes/Rectangle3@2x.png";
import { Link } from "react-router-dom";

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

export default () => {
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
              <Col xs={6} sm={5} md={4}>
                <UpdatedCard
                  picSrc={image}
                  picSrc2x={image2x}
                  price="82"
                  title="La Salentina, see, nature & relax"
                  rentType="Entire house"
                  bedsCount="9"
                  reviewsCount="97"
                  houseGrade="Superhost"
                />
              </Col>
              <Col xs={6} sm={5} md={4}>
                <UpdatedCard
                  picSrc={image2}
                  picSrc2x={image22x}
                  price="82"
                  title="Your private 3 bedr. riad and exclusi…"
                  rentType="Entire house"
                  bedsCount="5"
                  reviewsCount="161"
                  houseGrade="Superhost"
                />
              </Col>
              <Col xs={6} sm={5} md={4}>
                <UpdatedCard
                  picSrc={image3}
                  picSrc2x={image32x}
                  price="200"
                  title="Dreamy Tropical Tree House"
                  rentType="Entire house"
                  bedsCount="1"
                  reviewsCount="364"
                  houseGrade="Superhost"
                />
              </Col>
              <BtnNext />
            </HorizontalScroll>
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
