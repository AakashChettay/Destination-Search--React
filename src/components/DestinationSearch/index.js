import './index.css'

import React, {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {inputSearch: ''}
  onChangeInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const searchResults = destinationsList.filter(destinationDetails => {
      const desName = destinationDetails.name.toLowerCase()
      return desName.includes(inputSearch)
    })
    return (
      <div className="bgContainer">
        <h1 className="mainHeading">Destination Search</h1>
        <input
          className="inputStyle"
          placeholder="Search"
          onChange={this.onChangeInputSearch}
          type="search"
        />
        <img
          className="yoho"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="listContainerStyle">
          {searchResults.map(destination => (
            <DestinationItem
              key={destination.id}
              destinationData={destination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
