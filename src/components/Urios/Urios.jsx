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
  background-image: url(${'https://cdn.discordapp.com/attachments/897553246787342406/953701194583384084/morelos_ground_kids.jpg'});
  background-size: cover;
`;

const BiggerContainer = styled.div`
  border-top: 7px solid #2a0e74;
  border-bottom: 7px solid #2a0e74;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #009241;
`;
