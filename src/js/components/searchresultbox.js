import React from 'react'
import ReactCSSTransitiongroup from 'react-addons-css-transition-group'
import SearchResultList from './searchresultlist'

class SearchResultBox extends React.Component {
  render() {
    return (
      <ReactCSSTransitiongroup
        transitionName = 'slide'
        transitionAppear = {true}
        transitionAppearTimeout = {10000}
        transitionEnterTimeout = {10000}
        transitionLeaveTimeout = {10000}>
        <SearchResultList results ={this.props.results} />
      </ReactCSSTransitiongroup>
    )
  }
}

export default SearchResultBox