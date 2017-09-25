"use strict"

import axios from "axios";

//GET BOOKS
export const getBooks = () => {
  return (dispatch) => {
    axios.get("/api/books")
      .then((response) => {
        dispatch({type:"GET_BOOKS",payload: response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_BOOKS_REJECTED", payload: err})
      })
  }
}

//POST BOOK
export const postBook = (book) => {
  return (dispatch) => {
    axios.post("/api/books", book)
      .then((response) => {
        dispatch(
	  {
	    type:"POST_BOOK", 
	    payload: response.data
	  })
      })
      .catch((err) => {
        dispatch(
	  {
	    type:"POST_BOOK_REJECTED", 
	    payload:"there was an error while posting a new book"
	  })
      })
  } 
}

export const deleteBooks = (_id) => {
  return((dispatch) => {
    axios.delete("/api/books/" + _id)
     .then((response) => {
       dispatch({type: "DELETE_BOOK", payload: _id})
     })
    .catch((err) => {
    dispatch({type:"DELETE_BOOK-REJECTED", payload: err})
    })
  })
}

export const updateBooks = (book) => {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
} 
