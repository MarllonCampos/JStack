import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";

export function Post(props) {
  return (
    <>
      <article>
      <PostHeader 
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read  
        }}
        onRemove={props.onRemove}
        theme={props.theme}
      />
      <br />
      <small>{ props.post.subtitle ? props.post.subtitle : 'Subtítulo da notícia'}</small><br/>
      <br />
      Media : {props.post.likes / 2}
    </article>
    <br />
    </>
  );
}


Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

  }).isRequired,
  onRemove: PropTypes.func.isRequired
    
};
