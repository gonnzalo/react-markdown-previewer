import React from "react";
import marked from "marked";
import PropTypes from "prop-types";
import styles from "./Previewer.module.css";

function Previewer(props) {
  const { mobilePreview } = props;

  function createMarkup() {
    const markup = props.value;
    return { __html: marked(markup, { sanitize: true }) };
  }

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={createMarkup()}
      className={
        mobilePreview === "preview" ? styles.displayMobile : styles.previewer
      }
    />
  );
}

Previewer.propTypes = {
  value: PropTypes.string.isRequired,
  mobilePreview: PropTypes.string.isRequired
};

export default Previewer;
