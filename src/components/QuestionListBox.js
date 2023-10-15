import React from 'react'
import styles from '../styles/QuestionListBox.module.css'
import QuestionList from './QuestionList'

const contentList = [{
    title: '제목',
    css: styles.title
},
{
    title: '작성자',
    css: styles.writer
},
{
    title: '작성일시',
    css: styles.dated
},
{
    title: '조회수',
    css: styles.hit
}
]


function QuestionListBox() {
  return (
    <>
    <div className={styles.container}>
        {contentList.map(content => (
            <div className={content.css}><p>{content.title}</p></div>
        ))}

            
    </div>
    <QuestionList />
    </>
  )
}

export default QuestionListBox
