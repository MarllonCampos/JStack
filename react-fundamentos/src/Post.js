import React from "react";
import PropTypes from 'prop-types';

export function Post(props) {
  return (
    <>
    <article>
      <strong>{props.post.title ? props.post.title : 'Título da notícia'}</strong>
      <br />
      <small>{ props.post.subtitle ? props.post.subtitle : 'Subtítulo da notícia'}</small><br/>
      <br />
      Media : {props.likes / 2}
    </article>
    <br />
    </>
  );
}


Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired
  
};
