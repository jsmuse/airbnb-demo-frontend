import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Container = styled.div`
  position: fixed;
  height: 500px;
  width: 100%;
  z-index: -2;
`;

export default function SimpleMap() {
  const defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  return (
    <GoogleMapReact
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_API,
        language: 'en',
      }}
    >
      <Container lat={59.955413} lng={30.337844} text="Kreyser Avrora" />
    </GoogleMapReact>
  );
}
