import React from 'react'
import styles from '../styles/Board.module.css'
import QuestionListBox from './QuestionListBox'
import SortList from './SortList'
import SearchBar from './SearchBar'

function Board() {
  return (
    <>
      <SortList />
      
      <div className={styles.mainBackGround}>
        <QuestionListBox />
      </div>

      <SearchBar />
    </>
  )
}

export default Board
