import React from 'react';

// Importing 

// functional component declaration 

function Books(props) {

    // rendering the books using the props passes from Shelves component

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(props.book.imageLinks && props.book.imageLinks.thumbnail) || ""})`}}></div>
                    <div className="book-shelf-changer">
                              <select value={props.book.shelf || "none"} onChange={(v)=>{props.move(props.book , v.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                 </div>
            </div>
                 <div className="book-title">{props.book.title}</div>
                 <div className="book-authors">{(props.book.authors && props.book.authors.join(" / ")) || "no authors "}</div>
            </div>
        </li>
    );
}

export default Books
