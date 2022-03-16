import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import articles from '../../content/articles.json';

function Articles() {
  return (
    <Container>
      {articles.map((article, index) => {
        if (index === 0) {
          return (
            <Article
              title={article.title}
              author={article.authors}
              content={article.content}
              key={article.id + 10}
              url={article.url}
              showArrow
            />
          );
        } else {
          return (
            <Article
              title={article.title}
              author={article.authors}
              content={article.content}
              key={article.id + 10}
              url={article.url}
            />
          );
        }
      })}
    </Container>
  );
}

export default Articles;

const Container = styled.div`
  display: flex;

  @media (max-width: 922px) {
    flex-direction: column;
    margin-bottom: 0%;
  }
`;
