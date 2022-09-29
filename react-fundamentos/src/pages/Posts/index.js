import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default class Posts extends React.Component {
  componentWillUnmount() {
    console.log('Componente vai desmontar...')
    document.removeEventListener('scroll', this.handleScroll)

  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    console.log('scrolled...')
  }
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
