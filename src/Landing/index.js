import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin-bottom: 48px;
  &:last-of-type {
    margin-bottom: 64px;
  }
`;

export default () => {
  return (
    <div>
      <Wrapper>
        <Explore />
      </Wrapper>
      <Wrapper>
        <Experiences />
      </Wrapper>
      <Wrapper>
        <Homes />
      </Wrapper>
      <Wrapper>
        <Popular />
      </Wrapper>
      <Wrapper>
        <Featured />
      </Wrapper>

      <Footer />
    </div>
  );
};
