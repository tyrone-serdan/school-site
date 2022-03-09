import React from 'react';
import styled from 'styled-components';

function Headline({ title, author, date }) {
  return (
    <Article>
      <div>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <h5>{date}</h5>
      </div>
    </Article>
  );
}

export default Headline;

const Article = styled.div`
  transition: all 0.2s;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(${'https://picsum.photos/500/700'});
  height: 500px;
  width: 700px;
  color: #f1f7ed;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${'https://picsum.photos/500/700'});

    @media (max-width: 922px) {
      background-size: cover;
    }
  }

  h1 {
    margin-top: 100%;
  }

  h1,
  h3,
  h5 {
    margin-left: 2%;
  }

  @media (max-width: 922px) {
    background-size: cover;
    width: 100%;
    height: 100%;
    text-align: center;

    h1 {
      margin-top: 35%;
      font-size: 3.5rem;
    }

    h1,
    h3,
    h5 {
      margin-left: 0%;
    }

    div {
      margin-bottom: 35%;
    }
  }
`;
