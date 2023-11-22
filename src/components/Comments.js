import React from 'react'
import styles from '../styles/Comments.module.css'

function Comments({ comments }) {
    const arr = Array.isArray(comments) ? comments : [];
    const len = arr.length;

    const renderComments = commentId => (arr)
    .filter(comment => comment.parent_id === commentId)
    .map(comment => (
        <div key={comment.question_comment_id} className={comment.parent_id === null ? styles.commentBox : styles.commentBox2}>
            <p className={styles.pTag1}>{comment.writer}</p>  <p className={styles.pTag2}>{comment.createdate}</p> <p className={styles.liked}>{comment.likes}</p>
            <p className={styles.pTag3}>{comment.content}</p>
            {renderComments(comment.question_comment_id)}
        </div>
    ))


  return (
    <div>
      <p className={styles.lenTag}>댓글 [{len}]</p>
      {renderComments()}
    </div>
  )
}

export default Comments