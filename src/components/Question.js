import React from 'react'
import styles from '../styles/Question.module.css'
import { useHistory } from 'react-router-dom'

function Question({qnaId, title, writer, dated, hit, numOfComments}) {
  const history = useHistory();

  return (
    <li key={qnaId} className={styles.li} onClick={() => history.push(`/qna/detail/${qnaId}`)}>
      <div className={styles.title}>{title} {numOfComments !== 0 ? `[${numOfComments}]` : ''}</div>
      <div className={styles.writer}>{writer}</div>
      <div className={styles.dated}>{dated}</div>
      <div className={styles.hit}>{hit}</div>
    </li>
  )
}

export default Question
