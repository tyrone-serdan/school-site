import React from 'react';
import styled from 'styled-components';
import Headline from './subcomponents/Headline';
import Name from './subcomponents/Name';
import sample from './test/sample.json';

function Header() {
  return (
    <Flexbox>
      <Name />
      <Headline />
      <Headline />
      <Headline />
    </Flexbox>
  );
}

export default Header;

const Flexbox = styled.div`
  display: flex;
`;
