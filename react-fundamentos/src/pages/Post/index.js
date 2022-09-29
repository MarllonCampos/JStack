import React, { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'



export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location;

    this.queryParams = new URLSearchParams(search)

    this.history = this.props.history
  }

  handleNavigate = () => {
    this.history.push('/posts')
  }

  render() {

    console.log(this.props.match.params, this.queryParams.get('queryParam'));
    return (
      <>
        <button onClick={this.handleNavigate}>Voltar para posts</button>
        <h1>Post</h1>
      </>
    )
  }
}