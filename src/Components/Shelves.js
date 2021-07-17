import React from 'react';
import Books from './Books';
//Importing Data

// Declaring functional component
function Shelves(props) {

    // Loading the shelves with the data passed from Main component and passing data to Books component
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

                {props.bookshelf.map((book)=> <Books move={props.move} key={book.id} book={book}/>)}
            
          </ol>
        </div>
      </div>
    )
}

export default Shelves
