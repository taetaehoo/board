import React from "react";
import styles from '../styles/WriteBoard.module.css'
import WriteTitle from "./WriteTitle";
import WriteContent from "./WriteContent";
import WriteButton from "./WriteButton";
import ImageButton from "./ImageButton";

function WriteBoard() {
  return(
    <>
    <div className={styles.WriteBoard}>
      <WriteTitle />
      <div className={styles.Line}></div>
      <div className={styles.Line2}></div>
      <WriteContent />
    </div>
    <ImageButton /> <WriteButton />
    </>

  )
}

export default WriteBoard