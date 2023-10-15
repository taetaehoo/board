import React from 'react'
import styles from '../styles/Question.module.css'

function Question({qnaId, title, writer, dated, hit, numOfComments}) {
    console.log(qnaId)
  return (
    <li key={qnaId} className={styles.li}>
      <div className={styles.title}>{title} {numOfComments !== 0 ? `[${numOfComments}]` : ''}</div>
      <div className={styles.writer}>{writer}</div>
      <div className={styles.dated}>{dated}</div>
      <div className={styles.hit}>{hit}</div>
    </li>
  )
}

export default Question
