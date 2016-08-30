import React from 'react'
import SearchResultList from './searchresultlist'

class SearchResultBox extends React.Component {
  render() {
    return (
      <SearchResultList results={this.props.results} />
    )
  }
}

export default SearchResultBox