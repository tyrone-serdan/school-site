import React from 'react';
import styled from 'styled-components';
import Headline from './subcomponents/Headline';
import Name from './subcomponents/Name';
import sample from './test/sample.json';

function Header() {
  const ListOfPosts = [];

  function setupValues(array) {
    sample.forEach((blog) => {
      const post = {
        title: blog.title,
        authors: blog.authors,
        content: blog.content,
        id: blog.id,
      };
      
      array.push(post);
    });
  }

  setupValues(ListOfPosts);

  return (
    <Flexbox>
      <Name />
      <Headline title={ListOfPosts[0].title} author={ListOfPosts[0].authors} content={ListOfPosts[0].content} />
      <Headline title={ListOfPosts[1].title} author={ListOfPosts[1].authors} />
      <Headline title={ListOfPosts[2].title} author={ListOfPosts[2].authors} />
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
