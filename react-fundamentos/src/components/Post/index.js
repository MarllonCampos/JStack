import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";

import { Container, PostMetaInfo, Subtitle, Rate } from './styles'



function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
        onRemove={props.onRemove}
        theme={props.theme}
      />
      <PostMetaInfo>
        <Subtitle>{props.post.subtitle ? props.post.subtitle : 'Subtítulo da notícia'}</Subtitle>
        <Rate>Media : {props.post.likes / 2} </Rate>
      </PostMetaInfo>
    </Container>
  );
}


Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,

  }).isRequired,
  onRemove: PropTypes.func.isRequired

};
export default Post