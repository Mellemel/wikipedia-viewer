import React from 'react'
import SearchResult from './SearchResult'

class SearchResultList extends React.Component {
  render() {
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        {this.props.results.map((result) => {
          return (<SearchResult key={result.title} result={result}/>)
        })}
      </div>
    )
  }
}

export default SearchResultList