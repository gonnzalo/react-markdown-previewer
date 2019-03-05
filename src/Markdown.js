import React, { Component } from "react";
import Previewer from "./Previewer";
import styles from "./Markdown.module.css";

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="markdonBody">
        <header>
          <h1 className={styles.title}>Markdown Previewer</h1>
        </header>
        <div className={styles.description}>
          <h3 className={styles.descripInput}>Markdown</h3>
          <h3 className={styles.descripOutput}>Preview</h3>
        </div>
        <div className={styles.markContainer}>
          <textarea
            value={value}
            onChange={this.handleChange}
            className={styles.markInput}
          />
          <Previewer value={value} className={styles.markOutput} />
        </div>
      </div>
    );
  }
}

export default Markdown;
