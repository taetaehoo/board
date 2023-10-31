import React from 'react'
import styles from '../styles/Content.module.css'
import QnAContentHeader from './QnAContentHeader'
import QnAContentBox from './QnAContentBox'
import WriteContent from './WriteContent'
import Comments from './Comments'
import WriteButton from './WriteButton'
import { useEffect, useState } from 'react'
import axiosInstance from '../utils/apis'
import { useParams } from 'react-router-dom'

function Content() {

  const {Id} = useParams();

    const [contents, setContents] = useState([]);
    const [comms, setComments] = useState([]);

  useEffect(() => {

    axiosInstance.get(`/question/${Id}`)
      .then(response => {
        setContents(response.data);
      })
      .then(() => {
        axiosInstance.get(`/api/posts/${Id}`)
        .then(resp => {
          setComments(resp.data);
        })
      })
      
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생 : ', error);
      });
  }, []);

  return (
    <div className={styles.contentBox}>
      <QnAContentHeader title={contents.title} author={contents.author} dated={contents.dated} hit={contents.hit}/>

      <hr className={styles.hr}/>
        <QnAContentBox content={contents.content} liked={contents.likes} hashtags={contents.hashtags}/>

        <hr className={styles.hr}></hr>

        <WriteContent id={2}/> <WriteButton id={1}/>

        <hr className={styles.hr}></hr>
        <Comments comments={comms}/>
    </div>
  )
}

export default Content