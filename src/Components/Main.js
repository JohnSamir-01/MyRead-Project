import React from 'react';
import Shelves from './Shelves';
import { Link } from "react-router-dom";

function Main(props) {
  
    return (
        
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves move={props.move} title='Currently Reading' bookshelf={ props.books.filter(book=>book.shelf === 'currentlyReading')}/>
          <Shelves move={props.move} title='Want to Read' bookshelf={ props.books.filter(book=>book.shelf === 'wantToRead')}/>
          <Shelves move={props.move} title='Read' bookshelf={ props.books.filter(book=>book.shelf === 'read')}/>
          
          </div>  
          <div className="open-search">
           <Link to='/search'><button>Add a book</button></Link>
  
        </div>
      </div>
    )
}

export default Main
