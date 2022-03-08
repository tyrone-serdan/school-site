import React from 'react';
import styled from 'styled-components';

function Headline(props) {
  return (
    <Article>
      <h1>TITLE</h1>
      <h3>AUTHOR</h3>
      <h5>DATE</h5>
    </Article>
  );
}

export default Headline;

const Article = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),
    url(${'https://picsum.photos/500/700'});
  height: 500px;
  width: 700px;
  color: #f1f7ed;

  &:hover {
    cursor: pointer;
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),
      url(${'https://picsum.photos/500/700'});
  }

  h1 {
    margin-top: 75%;
  }

  h1,
  h3,
  h5 {
    margin-left: 2%;
  }
`;
