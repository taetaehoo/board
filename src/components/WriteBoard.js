import React from "react";
import styles from '../styles/WriteBoard.module.css'
import WriteTitle from "./WriteTitle";
import WriteContent from "./WriteContent";

function WriteBoard() {
  return(
    <div className={styles.WriteBoard}>
      <WriteTitle />
      <div className={styles.Line}></div>
      <div className={styles.Line2}></div>
      <WriteContent />
    </div>
  )
}

export default WriteBoard