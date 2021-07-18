import React from 'react';
import * as BooksAPI from './BooksAPI';
import Search from './Components/Search';
import Main from './Components/Main';
import './App.css';
import { Route, Switch } from 'react-router';
//Importing 

// Declaring Class comp
class BooksApp extends React.Component {
 
  constructor(props){
    super(props);

    this.state = {
      books:[],
      
  
    }
  }

// getting the books data from the API and storing it in the this.state.books array

async componentDidMount(){
 await BooksAPI.getAll()
    .then(resp=>{
      this.setState({ books:resp})})
    .catch(error=>console.log(error));
}

// Declaring moveShelf function then passing it shleves to be used to move books between shelves

moveShelf = (book,shelf)=>{
  BooksAPI.update(book,shelf)
    .then(b=>{
      book.shelf = shelf;
      this.setState({
      books: this.state.books.filter(e=> e.id !== book.id).concat([book])
    })
    
})}



  render() {
    // Routing pathes between the main page and the search page and adding props
    return (
      
        <Switch>
            
            <Route path="/search"render= {() => ( <Search  books={this.state.books} move={this.moveShelf}  />)} />
            <Route exact path="/"render= {() => ( <Main  books={this.state.books} move={this.moveShelf}  />)} />
            

        </Switch>
    
    )
  }
}

export default BooksApp
