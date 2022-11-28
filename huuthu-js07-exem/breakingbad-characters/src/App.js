import React, { Component } from "react";
import CharactersContainer from "./components/CharactersContainer";
import "./App.css";

class App extends Component {
  state = {
    result: [],
  };
  componentDidMount() {
    let url = "https://breakingbadapi.com/api/characters";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          result: data,
        });
        console.log(this.state.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <CharactersContainer result={this.state.result} />
      </>
    );
  }
}

export default App;
