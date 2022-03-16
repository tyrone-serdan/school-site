import React from 'react';
import styled from 'styled-components';

function Urios() {
  return <Container />;
}

export default Urios;

const Container = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 95%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${'http://www.urios.edu.ph/images/2020/02/26/morelos_ground_kids.jpg'});
  background-size: cover;
`;
