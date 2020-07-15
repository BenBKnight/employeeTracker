import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";


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
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card
          data={this.state.results}
        />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </div>
    );
  }
}

export default Discover;
