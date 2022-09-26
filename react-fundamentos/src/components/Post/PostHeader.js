import React from 'react'

import PropTypes from 'prop-types'
import Button from '../Button';


export default function PostHeader(props) {
  return (
    <>
      <strong style={{ marginRight: 15 }}>
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </strong>
      <Button
        onClick={() => props.onRemove(props.post.id)}
      >
        Remover
      </Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
