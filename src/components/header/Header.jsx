import React from 'react';
import styled from 'styled-components';
import Headline from './subcomponents/Headline';
import Name from './subcomponents/Name';
import headlines from '../../content/headlines.json';

function Header() {
  function setupValues() {
    const array = [];
    headlines.forEach((blog) => {
      array.push(blog);
    });

    return array;
  }

  const hLines = setupValues();

  return (
    <Flexbox>
      <Name />
      {hLines.map((article) => {
          return (
            <Headline
              title={article.title}
              author={article.authors}
              content={article.content}
              key={article.id}
              url={article.url}
              photoCredits={article.photoCredits}
            />
          );
      })}
    </Flexbox>
  );
}

export default Header;

const Flexbox = styled.div`
  display: flex;

  @media (max-width: 922px) {
    flex-direction: column;
  }
`;
