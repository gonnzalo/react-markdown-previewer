import React, { Component } from "react";
import Markdown from "./Markdown";
import Previewer from "./Previewer";
import MarkExample from "./MarkExample";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: MarkExample
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <Markdown value={value} handleChange={this.handleChange} />
          <Previewer value={value} />
        </div>
      </div>
    );
  }
}

export default App;
