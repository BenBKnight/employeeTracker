import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Search from "../components/Search";

class Discover extends Component {
  state = {
    results: [],
    search: [],
    firstNameSorted: false
  };

  componentDidMount() {
    this.getEmployeeData();
  };

  handleInputChange = e => {
    e.preventDefault();
    const searchedName = e.target.value;
    this.setState({
      search: searchedName
    })
  };

  getEmployeeData = () => {
    API.getAll()
      .then(res =>
        this.setState({
          results: res.data.results
        })
      )
      .catch(err => console.log(err));
  };
  sortByName = (event) => {
    event.preventDefault();
    let sorted = this.state.results;
    if (this.state.firstNameSorted === false) {
      sorted.sort((a, b) => a === b ? 0 : (a.name.first > b.name.first) ? 1 : -1)
      this.setState({
        result: sorted,
        firstNameSorted: true
      })
    } else {
      sorted.sort((a, b) => a === b ? 0 : (a.name.first < b.name.first) ? 1 : -1)
      this.setState({
        result: sorted,
        firstNameSorted: false
      })
    }
  }
  // toggleFirstName = () => {
  //   this.sortByName();
  //   this.setState({
  //     firstNameSorted: !this.state.firstNameSorted
  //   })
  // }






  // let newResults = results.name.first
  // this.setState({
  //   results: newResults.sort((a,b) )
  // })


  render() {
    return (
      <React.Fragment>
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <Table
          sortByName={this.sortByName}
          data={this.state.results}
          search={this.state.search}
        />
      </React.Fragment>
    );
  }
}

export default Discover;
