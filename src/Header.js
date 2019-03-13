import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header(props) {
  const { handleClick, mobilePreview } = props;
  return (
    <div className={styles.headerContainer}>
      <header>
        <h1 className={styles.title}>Markdown Previewer</h1>
      </header>
      <div className={styles.description}>
        <h3 className={styles.descripInput}>Markdown</h3>
        <h3 className={styles.descripOutput}>Preview</h3>
      </div>
      <div className={styles.buttonMobile}>
        <button
          type="button"
          className={`${styles.btnsMobile}  ${mobilePreview === "markdown" &&
            styles.btnsMobileActive}`}
          onClick={handleClick}
          value="markdown"
        >
          Markdown
        </button>
        <button
          type="button"
          className={`${styles.btnsMobile}  ${mobilePreview === "preview" &&
            styles.btnsMobileActive}`}
          onClick={handleClick}
          value="preview"
        >
          Preview
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mobilePreview: PropTypes.string.isRequired
};

export default Header;
