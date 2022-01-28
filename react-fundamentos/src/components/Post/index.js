import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";
import styles from './Post.scss'

import { Subtitle, Rate } from './styles'



function Post(props) {
  return (
    <article className={props.post.removed ? styles.post + " " + styles.postDeleted : styles.post}>
      <PostHeader
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
        onRemove={props.onRemove}
        theme={props.theme}
      />
      <Subtitle>{props.post.subtitle ? props.post.subtitle : 'Subtítulo da notícia'}</Subtitle>
      <Rate>Media : {props.post.likes / 2} </Rate>
    </article>
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