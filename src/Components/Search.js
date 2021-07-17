import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Books from './Books';
import { Link } from "react-router-dom";
//importing

// declaring class
class Search extends Component {
constructor(props){
super(props);

this.state = {
  query: "",
  res:[],
}}

  // setting the query in this.state and calling searchBooks function
  updateQuery = query => {
    this.setState({query:query}, this.searchBooks);
  };

  // finding the books using the query provided

  searchBooks = () => {

    // clearing the list if there is nothing typed 

    if (this.state.query=== "" || this.state.query=== undefined) {
      this.setState({ res: [] });
      return;
    }

    // using the search function provided in BooksAPI to find the books 

    BooksAPI.search(this.state.query.trim())
      .then(books => {
        // filtering books
        
          books.forEach(element => {
            let bookWithShelf = this.props.books.filter(i=> i.id===element.id);
            element.shelf = bookWithShelf[0] ? bookWithShelf[0].shelf : null;
         });
          return this.setState({ res: books });
      
      }) 
      .catch(err => {
        this.setState({
          res: [],
        }); 
        console.log(err);
      });
  }
  

  render() {
    return (
        <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(i)=>this.updateQuery(i.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.res.map((b)=>(

                  // mapping over the books componet to display the filtered books

                  <Books key={b.id} book={b} move={this.props.move}/>
                  
                ))}
              </ol>
            </div>
          </div>  
        </div>
        )
    }
}

export default Search
