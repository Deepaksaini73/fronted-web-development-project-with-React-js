import React from 'react';
import { Link } from 'react-router-dom';
import './Booklist.css'


const Book = (book) => {
  return (
  <Link to={`/book/${book.id}`} {...book}>
    <div className='book-item flex flex-column flex-sb'>
      

        <div className="book-item-img">
          <img src={book.cover_id} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>


          <div className='book-item-info-item author fw-7 fs-15'>
            <span className='text-capitalize fw-7'>Author:</span>
            <span>{book.author_name}</span>
          </div>

          <div className='book-item-info-item edition-count fw-7 fs-15'>
            <span className='text-capitalize fw-7'>Total Edtion:</span>
            <span>{book.edition_count}</span>
          </div>

          <div className='book-item-info-item publish-year fw-7 fs-15'>
            <span className='text-capitalize fw-7'>Publish Year:</span>
            <span>{book.first_publish_year}</span>
          </div>

        </div>
      
    </div>
    </Link>
  )
}

export default Book;