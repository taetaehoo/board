import React from "react";
import styles from '../styles/WriteButton.module.css'
import { useHistory } from "react-router-dom";

function WriteButton() {
  const history = useHistory();
  return (
    <div className={styles.WriteButtonDiv}>
      <button type='submit' className={styles.WriteButton} onClick={() => history.push(`/qna/write`)}>글쓰기</button>
    </div>
  )
}

export default WriteButton