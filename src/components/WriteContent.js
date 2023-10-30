import React from "react";
import styles from '../styles/WriteContent.module.css'

const placeHolderText = '내용을 입력해주세요.';

function WriteContent() {
  return(
    <div>
      <textarea placeholder={placeHolderText} className={styles.content} rows="10"/>
    </div>
  )
}

export default WriteContent