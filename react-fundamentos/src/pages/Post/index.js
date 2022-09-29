import React, { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search])


//   console.log(params, queryParams.get('queryParam'));
//   return (
//     <h1>Post</h1>
//   )
// }


export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location;

    this.queryParams = new URLSearchParams(search)
  }

  render() {

    console.log(this.props.match.params, this.queryParams.get('queryParam'));
    return (
      <h1>Post</h1>
    )
  }
}