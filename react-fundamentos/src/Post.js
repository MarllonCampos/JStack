import React from "react";

export function Post(props) {
  return (
    <>
    <article>
      <strong>{props.post.title ? props.post.title : 'Título da notícia'}</strong>
      <br />
      <small>{ props.post.subtitle ? props.post.subtitle : 'Subtítulo da notícia'}</small><br/>
      
    </article>
    <br />
    </>
  );
}
