import React from 'react'
import styles from '../styles/Board.module.css'
import QuestionListBox from './QuestionListBox'

function Board() {
  return (
    <>
      <div className={styles.mainBackGround}>
        <QuestionListBox />
      </div>
    </>
  )
}

export default Board
