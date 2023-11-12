import React, { useEffect, useMemo, useState } from 'react'
import styles from '../styles/Board.module.css'
import QuestionListBox from './QuestionListBox'
import SortList from './SortList'
import SearchBar from './SearchBar'
import Title from './Title'
import WriteButton from './WriteButton'

function Board({pageId}) {
  const [selectedSort, setSelectedSort] = useState(1);
  const [searchTermFromSearchBar, setSearchTermFromSearchBar] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  const handleSortChange = selectedValue => {
    setSelectedSort(selectedValue);
  }

  const handleSearch = searchTerm => {
    setSearchTermFromSearchBar(searchTerm);

    setCurrentPage(1);
  }

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  }

  const itemsPerPage = 15;

  const totalPages = useMemo(() => {
    const totalCnt = Math.ceil(totalItem / itemsPerPage);
    setTotalPage(totalCnt);
    return totalCnt;
  }, [totalItem, itemsPerPage])

  const goPage = pageNum => {
    if (pageNum < 1 || pageNum > totalPage) setCurrentPage(1);

    setCurrentPage(pageNum);
  }

  useEffect(() => {
    console.log(totalItem)
  }, [totalItem])

  const generatePageNumbers = () => {
    const maxButtonsToShow = 5; // Adjust this based on your design preference
    const buttons = [];

    const start = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    const end = Math.min(totalPages, start + maxButtonsToShow - 1);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <Title pageId={pageId}/> <SortList onSortChange={handleSortChange}/> <WriteButton id={pageId === 1 ? 2 : 4}/>
      
      <div className={styles.mainBackGround}>
        <QuestionListBox pageId={pageId} selectedValue={selectedSort} searchValue={searchTermFromSearchBar} currentPage={currentPage} setTotalItem={setTotalItem}/>
      </div>

      <div>
        <button onClick={() => goPage(1)}>(1)</button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {generatePageNumbers()}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={() => goPage(totalPage)}>({totalPage})</button>
      </div>

      <SearchBar onSearch={handleSearch}/>
    </>
  )
}

export default Board
