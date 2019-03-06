import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Markdown Previewer</h1>
      </header>
      <div className={styles.description}>
        <h3 className={styles.descripInput}>Markdown</h3>
        <h3 className={styles.descripOutput}>Preview</h3>
      </div>
    </div>
  );
}

export default Header;
