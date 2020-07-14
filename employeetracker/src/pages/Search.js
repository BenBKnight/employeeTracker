import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Hero from "../components/Hero"
class Search extends Component {
  state = {
    search: "",
    name: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base name and update this.state.name
  componentDidMount() {
    API.getAll()
      .then(res => this.setState({ name: res.results.name.first }))
      .then(res => console.log(res.results.name.first))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getAll(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Hero>
          <h1>Employee Directory</h1>
          <h2>Click on carrots to filter by headin or use the search box to narrow your results</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search for Employee</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
