import React from "react";
import styles from '../styles/ImageButton.module.css'
import { useHistory } from "react-router-dom";

function ImageButton() {
  const history = useHistory();
  return (
    <div className={styles.ImageButtonDiv}>
      <button type='submit' className={styles.ImageButton}>이미지 첨부</button>
    </div>
  )
}

export default ImageButton