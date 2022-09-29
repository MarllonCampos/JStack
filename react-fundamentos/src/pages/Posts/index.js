import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default class Posts extends React.Component {

  render() {
    return (
      <ContainerComponent />)
  }
}

// export default function PostsList() {
//   return (
//     <ContainerComponent />
//   );
// }


function ContainerComponent() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  )
}
