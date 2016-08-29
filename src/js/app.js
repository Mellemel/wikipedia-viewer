var React = require('react')
var ReactDOM = require('react-dom')

$(document).ready(() => {
  var input = $('#searchInput'), searchButton = $('#searchButton')

  $('#searchButton').click(() => {
    var searchText = input.val()

    getSearchResults(searchText, (data) => {
      var cleanData = sanitizeData(data, limit)
      ReactDOM.render(
        <SearchResultsBox results={cleanData} />,
        document.getElementById('searchResults')
      )
    })
  })
  $('#searchInput').keypress((e) => {
    if (e.which === 13) {
      searchButton.click()
    }
  })

  $('#random').click(() => {

  })

  var SearchResult = React.createClass({
    render: function () {
      return (
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1 result">
            <a href={this.props.result.link}>
              <h2>{this.props.result.title}</h2>
              <p>{this.props.result.summary}</p>
            </a>
          </div>
        </div>
      )
    }
  })

  var SearchResultsBox = React.createClass({
    render: function() {
      return (
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          {this.props.results.map((result) => {
            return <SearchResult result={result} />
          }) }
        </div>
      )
    }
  })

  var limit = 5

  function getSearchResults(searchTerm, cb) {
    $.ajax({
      url: '//en.wikipedia.org/w/api.php',
      data: {
        action: 'opensearch',
        search: searchTerm,
        namespace: 0,
        limit: limit,
        format: 'json'
      },
      dataType: 'jsonp',
      type: 'POST',
      success: cb,
      headers: { 'Api-User-agent': 'wikipedia viewer (m.canela92@gmail.com)' }
    })
  }

  function sanitizeData (data, limit) {
    var titles = data[1], summaries = data[2], links = data[3]
    var temp = []
    for (let x = 0; x < limit; x++){
      temp.push({
        title: titles[x],
        summary: summaries[x],
        link: links[x]
      })
    }
    return temp
  }
})
