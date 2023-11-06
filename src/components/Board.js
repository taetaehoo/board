import React from 'react'
import styles from '../styles/Board.module.css'
import QuestionListBox from './QuestionListBox'
import SortList from './SortList'
import SearchBar from './SearchBar'
import Title from './Title'
import WriteButton from './WriteButton'

function Board({pageId}) {
  return (
    <>
      <Title pageId={pageId}/> <SortList /> <WriteButton id={pageId === 1 ? 2 : 4}/>
      
      <div className={styles.mainBackGround}>
        <QuestionListBox pageId={pageId}/>
      </div>

      <SearchBar />
    </>
  )
}

export default Board
