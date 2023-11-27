import React, { useMemo } from 'react'
import styles from '../styles/Content.module.css'
import QnAContentHeader from './QnAContentHeader'
import QnAContentBox from './QnAContentBox'
import WriteContent from './WriteContent'
import Comments from './Comments'
import WriteButton from './WriteButton'
import { useEffect, useState } from 'react'
import axiosInstance from '../utils/apis'
import { useParams } from 'react-router-dom'
import GptComment from './GptComment'
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
import Popup from './Popup'

function Content() {

  const {Id} = useParams();
  const [data, setData] = useState('');
    const [contents, setContents] = useState({});
    const [comms, setComments] = useState({});
    const [gpt, setGpt] = useState('');

    const totalPages = useMemo(() => {
      return comms.totalPages;
    }, [comms])

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;


    const handlePostRequest = () => {
    
      axiosInstance.post(`/question/${Id}/comment`, {
        content: data
      }).then(resp => console.log(resp))
      .catch(err => console.log(err));
    }

  useEffect(() => {
    axiosInstance.get(`/question/${Id}`)
      .then(resp => {
        setContents(resp.data);
        setComments(resp.data.questionComments);
        setGpt(resp.data.chatGPT.content);
      })
      
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생 : ', error);
      });
  }, [Id]);

  useEffect(() => {
    axiosInstance.get(currentPage !== 1 ? `/question/${Id}?page=${currentPage-1}` : `/question/${Id}`)
    .then(resp => {
      setComments(resp.data.questionComments);
    })
    .catch(error => console.error(error))
  }, [currentPage])

  const handleContent = newVal => {
    setData(newVal);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the starting and ending indices for comments to display on the current page
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;

  return (
    <div className={styles.contentBox}>
      <QnAContentHeader title={contents.title} author={contents.writer} dated={contents.createDate} hit={contents.views}/>
      <Popup isWriterDec={true} writer={contents.writer}/>
      <hr className={styles.hr}/>
        <QnAContentBox content={contents.content} liked={contents.likes} hashtags={[]}/>
        <Popup isQnaCon={true} postId={Id}/>
        <UpdateButton className={styles.upBtn} id={Id} pageId={1}/> <DeleteButton id={Id} pageId={1}/>

        <hr className={styles.hr}></hr>

        <WriteContent id={2} onTextChange={handleContent}/> <WriteButton id={1} sendDataToParent={handlePostRequest}/>

        <hr className={styles.hr}></hr>
        {gpt ? <GptComment gpt={gpt}/> : <></>}
        <div>
      {/* 댓글 렌더링 */}
      <Comments comments={comms} />

      {/* 페이지 이동 버튼 */}
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous Page</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next Page</button>
    </div>
    </div>
  )
}

export default Content