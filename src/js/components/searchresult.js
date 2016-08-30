import React from 'react'

class SearchResult extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 result">
          <a href={this.props.link}>
            <h2>{this.props.title}</h2>
            <p>{this.props.children}</p>
          </a>
        </div>
      </div>
    )
  }
}

export default SearchResult