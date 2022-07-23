import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import * as BooksAPI from "../BooksAPI";
// import * as BooksAPI from "../BooksAPI";
export const BookOption = ({ shelf, book }) => {
  const [Select, setSelect] = useState(shelf);
  // console.log(Select);
  const UpdateShelve = async (b, s) => {
    await BooksAPI.update(b, s);
    // setSelect(s);
  };

  const GetSelectedBook = (selectedShelf) => {
    // console.log(selectedShelf);
    UpdateShelve(book, selectedShelf);
    
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback((event) => {
    GetSelectedBook(event.target.value);
    setSelect( event.target.value);
   
  });

  useLayoutEffect(() => {}, [handleChange]);

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
