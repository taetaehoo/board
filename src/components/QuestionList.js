import React from 'react'
import styles from '../styles/QuestionList.module.css'
import Question from './Question'

const contents = [
    {
        qnaId: 1,
        title: '뭐가 문제인지 모르겠어요',
        writer: '삼색이',
        dated: '2023.09.02',
        hit: 1,
        numOfComments: 0,
    },
    {
        qnaId: 2,
        title: '이거 왜 에러남?',
        writer: '도도',
        dated: '2023.09.02',
        hit: 25,
        numOfComments: 2
    }
    ]

function QuestionList() {
  return (
    <ul className={styles.ul}>
      {contents.map(content => (
        <Question key={content.qnaId} {...content}/>
      ))}
    </ul>
  )
}

export default QuestionList
