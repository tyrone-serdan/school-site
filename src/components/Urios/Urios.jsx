import React from 'react';
import styled from 'styled-components';

function Urios() {
  return (
    <BiggerContainer>
      <Container />
    </BiggerContainer>
  );
}

export default Urios;

const Container = styled.div`
  width: 95%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${'http://www.urios.edu.ph/images/2020/02/26/morelos_ground_kids.jpg'});
  background-size: cover;
`;

const BiggerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #009241;
`;
