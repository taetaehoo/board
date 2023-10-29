import React from "react";
import styles from '../styles/WriteButton.module.css'

function WriteButton() {
  return(
    <div className={styles.WriteButtonDiv}>
      <button type='submit' className={styles.WriteButton}>글쓰기</button>
    </div>
  )
}

export default WriteButton