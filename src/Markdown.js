import React from "react";
import PropTypes from "prop-types";
import styles from "./Markdown.module.css";

function Markdown(props) {
  const { value, handleChange } = props;
  return (
    <div className={styles.markContainer}>
      <textarea
        value={value}
        onChange={handleChange}
        className={styles.markInput}
      />
    </div>
  );
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Markdown;
