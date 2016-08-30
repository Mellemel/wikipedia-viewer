import React from 'react'
import ReactDOM from 'react-dom'
import SearchResultBox from './components/searchresultbox'

$(document).ready(() => {
  var input = $('#searchInput'), searchButton = $('#searchButton')

  searchButton.click(() => {
    var searchText = input.val()

    getSearchResults(searchText, (data) => {
      var cleanData = sanitizeData(data, limit)
      ReactDOM.render(
        <SearchResultBox results={cleanData} />,
        document.getElementById('searchResults')
      )
    })
  })
  $('#searchInput').keypress((e) => {
    if (e.which === 13) {
      searchButton.click()
    }
  })

  var limit = 10

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

  function sanitizeData(data, limit) {
    var titles = data[1], summaries = data[2], links = data[3]
    var temp = []
    for (let x = 0; x < limit; x++) {
      temp.push({
        title: titles[x],
        summary: summaries[x],
        link: links[x]
      })
    }
    return temp
  }
})
