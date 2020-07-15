import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table";


class Discover extends Component {
  state = {
    results: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  loadNextDog = () => {
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
      <Table
        data={this.state.results}
      />
    );
  }
}

export default Discover;
