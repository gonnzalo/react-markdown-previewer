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
      value: MarkExample,
      mobilePreview: "markdown"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    this.setState({ mobilePreview: event.target.value });
  }

  render() {
    const { value, mobilePreview } = this.state;
    return (
      <div className="App">
        <Header handleClick={this.handleClick} />
        <div className="Container">
          <Markdown
            value={value}
            handleChange={this.handleChange}
            mobilePreview={mobilePreview}
          />
          <Previewer value={value} mobilePreview={mobilePreview} />
        </div>
      </div>
    );
  }
}

export default App;
