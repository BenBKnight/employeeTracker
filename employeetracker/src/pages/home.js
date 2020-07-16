import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Search from "../components/Search";

class Discover extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.getEmployeeData();
  };

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  handleInputChange = event => {
    event.preventDefault();
    this.state.results.filter(
      (results) => {
        let filtered = results.indexOf(this.state.search) !== -1;
        return this.setState({ results: filtered })
      }
    )
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  getEmployeeData = () => {
    API.getAll()
      .then(res =>
        this.setState({
          results: res.data.results
        })
      )
      .catch(err => console.log(err));
    API.getAll().then(res => console.log(res.data.results
    ))
  };


  render() {
    return (
      <React.Fragment>
        <Search
          handleInputChange={this.handleInputChange}
        />
        <Table
          data={this.state.results}
          search={this.state.search}
        />
      </React.Fragment>
    );
  }
}

export default Discover;
