import React, { useEffect, useState } from 'react';
import Question from './Question';
import styles from '../styles/QuestionList.module.css';
import axiosInstance from '../utils/apis';

function QuestionList({pageId}) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    
    axiosInstance.get(pageId === 1 ? "/question" : "/codequestion")
     .then(response => {
       setContents(response.data.content);
       console.log(response.data.content)
     })
     
     .catch(error => {
       console.error('데이터를 불러오는 중 오류 발생 : ', error);
     });
 }, []);

  return (
    <ul className={styles.ul}>
      {contents.map(content => (
        <Question key={content.id} pageId={pageId} {...content}/>
      ))}
    </ul>
  );
}

export default QuestionList;
