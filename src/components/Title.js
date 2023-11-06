import React from 'react'
import styles from '../styles/Title.module.css'

function Title({pageId}) {
  console.log(pageId)
  return (
    <div className={styles.title}>
      {pageId === 1 ? 'Q&A' : 'Code Review'}
    </div>
  )
}

export default Title
