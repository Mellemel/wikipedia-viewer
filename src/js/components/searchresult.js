import React from 'react'

class SearchResult extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 result">
          <a href={this.props.result.link}>
            <h2>{this.props.result.title}</h2>
            <p>{this.props.result.summary}</p>
          </a>
        </div>
      </div>
    )
  }
}

module.exports = SearchResult