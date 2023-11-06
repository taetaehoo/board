import React from 'react'
import styles from '../styles/Title.module.css'

const id = 1

function Title() {
  return (
    <div className={styles.title}>
      {id !== 1 ? 'Q&A' : 'Code Review'}
    </div>
  )
}

export default Title
