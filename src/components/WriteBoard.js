import React, { useEffect, useState } from "react";
import styles from '../styles/WriteBoard.module.css'
import WriteTitle from "./WriteTitle";
import WriteContent from "./WriteContent";
import ImageButton from "./ImageButton";
import WriteButton from "./WriteButton";
import axiosInstance from '../utils/apis';
import CodeWriteBoard from "./CodeWriteBoard";
import { useLocation } from "react-router-dom";

function WriteBoard() {
  const location = useLocation();
  const path = location.pathname;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostRequest = () => {
    
    axiosInstance.post(path !== '/codequestion/add' ? '/question' : '/codequestion', {
      title: title,
      content: content,
      writer: "ddag"
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  const handleTitleChange = newText => {
    setTitle(newText);
  }

  const handleContentChange = newText => {
    setContent(newText);
  }


  return(
    <div className={styles.container}>
    <div className={styles.WriteBoard}>
      <WriteTitle onTextChange={handleTitleChange}/>
      <div className={styles.Line}></div>
      <div className={styles.Line2}></div>
      <WriteContent id={1} onTextChange={handleContentChange}/>
    </div>
    {path === '/codequestion/add' ? <CodeWriteBoard /> : < ></>}
    <ImageButton/><WriteButton id={path === '/codequestion/add' ? 5 : 3} sendDataToParent={handlePostRequest}/>
    </div>
  )
}

export default WriteBoard