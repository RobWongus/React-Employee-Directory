import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import EmployeeTable from './components/EmployeeTable';
import people from "./components/marvel.json"

class App extends React.Component {

  // Our list of people is stored in state so we can modify it via search or sort
  state = {
    peopleList: people,
    search: ""
  }

  // Update search field when user types
  // searchpeople() needs to be a callback so it always has the latest value of state.search
  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({ search: e.target.value }, this.searchPeople)
  }

  searchPeople = () => {
    if( !this.state.search.length ){
      this.setState({ peopleList: people })
    } else {
      const filteredList = this.state.peopleList.filter( person => {
        return person.last.includes(this.state.search)
      })
      this.setState({ peopleList: filteredList })
    }
  }

  sortPeople = (propToSortBy) => {
    // slice(0) clones an array
    const sortedList = this.state.peopleList.slice(0)
    sortedList.sort((a, b) => (a[propToSortBy] > b[propToSortBy]) ? 1 : -1)
    this.setState({ peopleList: sortedList })
  }

  // Ref: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/


  

  render(){
    return (
      <>
        <Navbar/>
        <Searchbar 
          search={this.state.search}
          searchPeople={this.searchPeople}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable 
          peopleList={this.state.peopleList}
          sortPeople={this.sortPeople} 
        />
      </>
    )
  }
}

export default App;

