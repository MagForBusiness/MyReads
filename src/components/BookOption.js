import React from 'react'
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";

export const BookOption = ({ shelf ,book }) => {
  const [Select, setSelect] = useState(shelf);
  
  const handleChange = (event) => {
    setSelect(event.target.value);
    UpdateShelve(book, Select);
  };
   console.log(Select);
   const UpdateShelve = async (book, Select) => {
     await BooksAPI.update(book, Select);
   };
 
  return (
    <div className="book-shelf-changer">
      <select value={Select} onChange={handleChange}>
        <option value="Moveto" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
