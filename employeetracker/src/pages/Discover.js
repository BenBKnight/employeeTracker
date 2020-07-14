import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Discover extends Component {
  state = {
    title: "",
    first: "",
    last: "",
    image: "",
    phone: "",
    email: "",
    dob: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  loadNextDog = () => {
    API.getAll()
      .then(res =>
        this.setState({
          title: res.data.results[0].name.title,
          first: res.data.results[0].name.first,
          last: res.data.results[0].name.last,
          image: res.data.results[0].picture.large,
          phone: res.data.results[0].cell,
          email: res.data.results[0].email,
          dob: res.data.results[0].dob.date
        })
      )
      .catch(err => console.log(err));
    API.getAll().then(res => console.log(res.data.results[0]
    ))
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card title={this.state.title} first={this.state.first} last={this.state.last}
          phone={this.state.phone} email={this.state.email} dob={this.state.dob} image={this.state.image} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </div>
    );
  }
}

export default Discover;
