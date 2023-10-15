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
    },
    {
      qnaId: 3,
      title: '코드 좀 봐주세요',
      writer: '도레미',
      dated: '2023.09.02',
      hit: 50,
      numOfComments: 4
  },
  {
    qnaId: 4,
    title: '안녕하세요. 질문 있습니다.',
    writer: '안녕',
    dated: '2023.09.02',
    hit: 34,
    numOfComments: 1
},
{
  qnaId: 5,
  title: '살려줘',
  writer: '글쓴애',
  dated: '2023.09.02',
  hit: 103,
  numOfComments: 5
},
{
  qnaId: 6,
  title: '코린이 도와줘용',
  writer: '게시판',
  dated: '2023.09.02',
  hit: 78,
  numOfComments: 5
},
{
  qnaId: 7,
  title: '얘가 말을 안 들어요',
  writer: '복숭아',
  dated: '2023.09.02',
  hit: 15,
  numOfComments: 2
},
{
  qnaId: 8,
  title: '아니 이게 왜 어디서 문제인거임?',
  writer: '딸기',
  dated: '2023.09.02',
  hit: 26,
  numOfComments: 1
},
{
  qnaId: 9,
  title: '질문',
  writer: '고양이',
  dated: '2023.09.02',
  hit: 7,
  numOfComments: 0
},
{
  qnaId: 10,
  title: '파이썬 어려웡',
  writer: '강아지',
  dated: '2023.09.02',
  hit: 199,
  numOfComments: 7
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
