import React from "react";
import styles from '../styles/WriteContent.module.css'

const placeHolderText = '내용을 입력해주세요.';

function WriteContent() {
  return(
    <div>
      <input type='text' placeholder={placeHolderText} className={styles.content}/>
    </div>
  )
}

export default WriteContent