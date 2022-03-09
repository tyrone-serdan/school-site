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
        date_posted: new Date(blog.date_posted).toDateString(),
        date_updated: new Date(blog.date_updated).toDateString(),
        id: blog.id,
      };

      array.push(post);
    });
  }

  setupValues(ListOfPosts);

  return (
    <Flexbox>
      <Name />
      <Headline
        title={ListOfPosts[0].title}
        author={ListOfPosts[0].authors}
        date={ListOfPosts[0].date_updated}
      />
      <Headline
        title={ListOfPosts[1].title}
        author={ListOfPosts[1].authors}
        date={ListOfPosts[1].date_updated}
      />
      <Headline
        title={ListOfPosts[2].title}
        author={ListOfPosts[2].authors}
        date={ListOfPosts[2].date_updated}
      />
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
