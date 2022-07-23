import React from "react";
// import * as BooksAPI from "../BooksAPI";
export const BookOption = ({ shelf, GetSelectedBook }) => {
  // const [Select, setSelect] = useState(shelf)

  //  useRef(() => {
  //    if (!shelf) {
  //      const shelfSelected = async (id) => {
  //        const GetBook = await BooksAPI.get(id);
  //        return GetBook.shelf;
  //      };
  //      setSelect(shelfSelected(bookID));
  //    }
  //  }, []);
  const handleChange = (event) => {
    console.log(event.target.value);
    GetSelectedBook(event.target.value);
    // UpdateShelve(book, Select);
  };
  
  
 

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
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
