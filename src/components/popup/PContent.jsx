import React from 'react';
import styled from 'styled-components';
import setupHTML from '../../misc';

function PContent({ title, author, content, close }) {
  const HTMLContent = setupHTML(content);

  return (
    <ContentPopup>
      <div>
        <h1>{title}</h1>
        <CloseContainer>
          <CloseArticle onClick={close}>Close Article</CloseArticle>
        </CloseContainer>
      </div>
      <div dangerouslySetInnerHTML={HTMLContent} style={{ margin: '0' }} />
      <div>
        <h3>- {author}</h3>
      </div>
    </ContentPopup>
  );
}

export default PContent;

const ContentPopup = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  text-align: justify;
  background-color: #f1f7ed;

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  h3 {
    margin-top: 7%;
    text-align: right;
  }

  p,
  div {
    margin-left: 4%;
    margin-right: 4%;
  }

  p::first-letter {
    margin-left: 5%;
  }

  @media (max-width: 922px) {
    height: 500px;
    text-align: justify;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseArticle = styled.button`
  border: 2px solid black;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  color: black;
  padding: 14px 28px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.225s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
