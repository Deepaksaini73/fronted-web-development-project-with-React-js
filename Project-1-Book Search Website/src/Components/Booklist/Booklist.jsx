import React from 'react';
import { useGlobalContext } from '../../context';
import Book from '../Booklist/Book';
import Loading from '../Loader/Loader';
import {FaArrowLeft} from "react-icons/fa";
import coverImg from "..//../images/book-cover-not-avilable.jpeg";
import './Booklist.css';
import { useNavigate } from 'react-router-dom';



function Booklist() {
  const navigate=useNavigate();
  const {books,loading,resultTitle} = useGlobalContext();
  const booksWithCovers =books.map((singleBook)=>{
    return {
      ...singleBook,
      id : (singleBook.id).replace('/works/',""),
      cover_id: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}.jpg`: coverImg

    }
  });
  console.log(booksWithCovers);
 

  if(loading) return <Loading/>

  return (
    <section className='booklist'>
      <div className='container'>
      <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Booklist 