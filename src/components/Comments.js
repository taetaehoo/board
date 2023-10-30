import React from 'react'
import styles from '../styles/Comments.module.css'

function Comments({...comments}) {
    const arr = Object.values(comments)[0];
    
    const renderComments = commentId => (arr)
    .filter(comment => comment.commentParent === commentId)
    .map(comment => (
        <div key={comment.commentId}>
            <p>{comment.commentAuthor} - {comment.commentDated}</p>
            <p>{comment.commentContent}</p>
            {renderComments(comment.commentId)}
        </div>
    ))


  return (
    <div>
      {renderComments(null)}
    </div>
  )
}

export default Comments
