import React from 'react';
import styled from 'styled-components';

function Button() {
  return (
    <StyledButton>
      <h3>Read More</h3>
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 1rem;
  padding: 2% 2%;
  border-color: #95adb6;
  border-style: solid;
  border-width: 2px;
  border-radius: 10%;
  transition: background-color 100ms;

  &:hover {
    cursor: pointer;
    background-color: #95adb6;
    color: #f1f7ed;
  }

  h3 {
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: center;
  }
`;
