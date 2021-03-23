import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

const url = `http://localhost:3000/toys`;

class App extends React.Component {
  state = {
    display: false,
    toys: [],
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? (
          <ToyForm url={url} getToys={this.getToys} />
        ) : null}
        <div className='buttonContainer'>
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer url={url} getToys={this.getToys} toys={this.state.toys} />
      </>
    );
  }

  componentDidMount() {
    this.getToys();
  }

  getToys = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.upDateState(res))
      .catch((error) => console.error("ERROR: ", error));
  };

  upDateState = (jsonToys) => {
    this.setState({
      toys: jsonToys,
    });
  };
}

export default App;
